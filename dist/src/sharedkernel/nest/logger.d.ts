import { ConsoleLogger, LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthServiceDocument } from 'src/infrastructure/persistence/local/mongodb/schema/auth.schema';
import { AuthServiceLocalMongodbRepositoryInterface } from 'src/infrastructure/persistence/local/mongodb/repository/auth-service.mongodb.repository.service';
export declare class MainLogger extends ConsoleLogger implements LoggerService {
    configService: ConfigService;
    private winston;
    constructor(configService: ConfigService);
    error(message: any, context?: any, stack?: any, data?: any): any;
    log(message: any, context?: any, data?: any): any;
    warn(message: any, context?: any, data?: any): any;
    setContext(context?: string): void;
    printLog(): boolean;
    setWinstonLogger(): void;
    setFluentdTransport(): void;
}
export declare class AuthLogger extends MainLogger {
    private authServiceRepository;
    constructor(authServiceRepository: AuthServiceLocalMongodbRepositoryInterface, configService: ConfigService);
    error(message: any, context?: any, stack?: any, data?: any): any;
    log(message: any, context?: any, data?: any): any;
    warn(message: any, context?: any, data?: any): any;
    saveAudit(): boolean;
    createDocument(message: any, stack?: any, data?: any): Promise<AuthServiceDocument>;
}
