import { Module } from '@nestjs/common';
import { UserHandler } from 'adapter/handler/user.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLocalRepository } from 'infrastructure/persistence/local/typeorm/repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'di/strategy/jwt-strategy';
import { ConfigModule } from '@nestjs/config';
import { JwtConfig } from 'di/config';
import { MainLogger } from 'sharedkernel/nest/logger';
import { UserProvider } from 'di/provider';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync(JwtConfig),
    TypeOrmModule.forFeature([UserLocalRepository]),
    // MongooseModule.forFeature([
    //   { name: UserService.name, schema: UserServiceSchema },
    // ]),
  ],
  controllers: [UserHandler],
  providers: [...UserProvider, JwtStrategy, MainLogger],
  exports: [JwtStrategy, PassportModule],
})
export class UserModule {}
