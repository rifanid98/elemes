import { JwtModuleAsyncOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const JwtConfig: JwtModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => {
    return {
      secret: config.get('JWT_SECRET'),
      signOptions: {
        expiresIn: 3600,
      },
    };
  },
};
