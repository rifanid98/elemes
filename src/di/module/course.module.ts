import { Module } from '@nestjs/common';
import { CourseHandler } from 'adapter/handler/course.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CourseLocalRepository,
  UserLocalRepository,
} from 'infrastructure/persistence/local/typeorm/repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'di/strategy/jwt-strategy';
import { ConfigModule } from '@nestjs/config';
import { JwtConfig } from 'di/config';
import { MainLogger } from 'sharedkernel/nest/logger';
import { CourseProvider } from 'di/provider';
import { CloudinaryService } from 'di/services';
import { CloudinaryModule } from 'src/di/module/cloudinary.module';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync(JwtConfig),
    TypeOrmModule.forFeature([CourseLocalRepository, UserLocalRepository]),
    CloudinaryModule,
    // MongooseModule.forFeature([
    //   { name: CourseService.name, schema: CourseServiceSchema },
    // ]),
  ],
  controllers: [CourseHandler],
  providers: [...CourseProvider, JwtStrategy, MainLogger, CloudinaryService],
  exports: [JwtStrategy, PassportModule],
})
export class CourseModule {}
