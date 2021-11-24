import { Module } from '@nestjs/common';
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
import { StatisticProvider } from 'di/provider';
import { StatisticHandler } from 'adapter/handler';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync(JwtConfig),
    TypeOrmModule.forFeature([CourseLocalRepository, UserLocalRepository]),
    // MongooseModule.forFeature([
    //   { name: StatisticService.name, schema: StatisticServiceSchema },
    // ]),
  ],
  controllers: [StatisticHandler],
  providers: [...StatisticProvider, JwtStrategy, MainLogger],
  exports: [JwtStrategy, PassportModule],
})
export class StatisticModule {}
