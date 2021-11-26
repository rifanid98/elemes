import { Module } from '@nestjs/common';
import { AuthHandler } from 'adapter/handler/auth.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthLocalRepository } from 'infrastructure/persistence/local/typeorm/repository/auth.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'di/strategy/jwt-strategy';
import { UserLocalRepository } from 'infrastructure/persistence/local/typeorm/repository/user.repository';
import { ConfigModule } from '@nestjs/config';
import { AuthProvider } from 'di/provider';
import { JwtConfig } from 'di/config';
import { MainLogger } from 'sharedkernel/nest/logger';
import { RoleLocalRepository } from 'src/infrastructure/persistence/local/typeorm/repository';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync(JwtConfig),
    TypeOrmModule.forFeature([
      AuthLocalRepository,
      UserLocalRepository,
      RoleLocalRepository,
    ]),
    // MongooseModule.forFeature([
    //   { name: AuthService.name, schema: AuthServiceSchema },
    // ]),
  ],
  controllers: [AuthHandler],
  providers: [...AuthProvider, JwtStrategy, MainLogger],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
