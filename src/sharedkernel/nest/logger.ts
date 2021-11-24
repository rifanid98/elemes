import {
  ConsoleLogger,
  Inject,
  Injectable,
  LoggerService,
} from '@nestjs/common';
import * as Winston from 'winston';
import * as fluentLogger from 'fluent-logger';
import { ConfigService } from '@nestjs/config';
import { AuthServiceDocument } from 'src/infrastructure/persistence/local/mongodb/schema/auth.schema';
import { AuthServiceLocalMongodbRepositoryInterface } from 'src/infrastructure/persistence/local/mongodb/repository/auth-service.mongodb.repository.service';

const FluentTransport = fluentLogger.support.winstonTransport();

@Injectable()
export class MainLogger extends ConsoleLogger implements LoggerService {
  private winston: Winston.Logger;

  constructor(public configService: ConfigService) {
    super();
    this.setWinstonLogger();
    this.setFluentdTransport();
  }

  error(message: any, context?: any, stack?: any, data?: any): any {
    if (this.printLog()) {
      const argArray = [message];
      stack && argArray.push(stack);
      data && argArray.push(data);

      this.setContext(context);
      super.error.apply(this, argArray);
      this.winston.error({ message, stack });
    }
  }

  log(message: any, context?: any, data?: any): any {
    if (this.printLog()) {
      const argArray = [message];
      data && argArray.push(data);

      this.setContext(context);
      super.log.apply(this, argArray);
      this.winston.info({ message });
    }
  }

  warn(message: any, context?: any, data?: any): any {
    if (this.printLog()) {
      const argArray = [message];
      data && argArray.push(data);

      this.setContext(context);
      super.warn.apply(this, argArray);
      this.winston.warn({ message });
    }
  }

  setContext(context?: string) {
    context && super.setContext(context);
  }

  printLog(): boolean {
    const devStage = ['test'];
    return !devStage.includes(this.configService.get('STAGE'));
  }

  setWinstonLogger() {
    this.winston = Winston.createLogger({
      transports: [
        new Winston.transports.File({
          filename: 'combined.log',
          dirname: 'log',
          level: 'verbose',
        }),
        new Winston.transports.File({
          filename: 'error.log',
          dirname: 'log',
          level: 'error',
        }),
      ],
    });
  }

  setFluentdTransport() {
    if ((this.configService.get('FLUENTD_AVAILABILITY') as boolean) === true) {
      this.winston.add(
        new FluentTransport(this.configService.get('FLUENTD_TAG'), {
          host: this.configService.get('FLUENTD_HOST'),
          port: this.configService.get('FLUENTD_PORT'),
          timeout: this.configService.get('FLUENTD_TIMEOUT') as number,
          requireAckResponse:
            this.configService.get('FLUENTD_REQUIRE_ACK_RESPONSE') ?? false,
        }),
      );
    }
  }
}

@Injectable()
export class AuthLogger extends MainLogger {
  constructor(
    @Inject('AuthServiceLocalMongodbRepositoryInterface')
    private authServiceRepository: AuthServiceLocalMongodbRepositoryInterface,
    configService: ConfigService,
  ) {
    super(configService);
  }

  error(message: any, context?: any, stack?: any, data?: any): any {
    super.error(message, context, stack, data);
    if (this.saveAudit()) {
      this.createDocument(message, stack, data);
    }
    return;
  }

  log(message: any, context?: any, data?: any): any {
    super.log(message, context, data);
    if (this.saveAudit()) {
      this.createDocument(message, {}, data);
    }
    return;
  }

  warn(message: any, context?: any, data?: any): any {
    super.warn(message, context, data);
    if (this.saveAudit()) {
      this.createDocument(message, {}, data);
    }
    return;
  }

  saveAudit(): boolean {
    // staging, production
    const auditStage = [];
    return auditStage.includes(this.configService.get('STAGE'));
  }

  createDocument(
    message: any,
    stack?: any,
    data?: any,
  ): Promise<AuthServiceDocument> {
    return this.authServiceRepository.create({
      message: message,
      stack: stack,
      meta: data,
    });
  }
}
