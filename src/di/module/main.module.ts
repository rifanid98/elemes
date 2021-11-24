import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigModuleConfig, TypeOrmConfig } from 'di/config';
import { MulterModule } from '@nestjs/platform-express';
import { LoggerMiddleware } from 'sharedkernel/nest/middleware';
import { MainProvider } from 'di/provider';
import { CourseModule } from './course.module';
import { StatisticModule } from 'di/module/statistic.module';
import { UserModule } from 'di/module/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(ConfigModuleConfig),
    TypeOrmModule.forRootAsync(TypeOrmConfig),
    // MongooseModule.forRoot('mongodb://localhost/portal_nashtanet'),
    MulterModule.register({ dest: './upload' }),
    AuthModule,
    CourseModule,
    StatisticModule,
    UserModule,
  ],
  controllers: [],
  providers: [...MainProvider],
})
export class MainModule implements NestModule {
  constructor(private configService: ConfigService) {}

  configure(consumer: MiddlewareConsumer): any {
    if (this.configService.get('STAGE') !== 'test') {
      consumer
        .apply(LoggerMiddleware)
        .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
  }
}
