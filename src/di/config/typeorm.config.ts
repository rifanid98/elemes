import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  Course,
  Role,
  User,
} from 'infrastructure/persistence/local/typeorm/entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as path from 'path';

const typeOrmMigrationDir =
  '../../infrastructure/persistence/local/typeorm/migration';
const migrationDir = path.join(__dirname, typeOrmMigrationDir);

export const TypeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => {
    const isProduction = config.get('STAGE') === 'production';
    return {
      ssl: isProduction,
      extra: {
        ssl: isProduction ? { rejectUnauthorized: false } : null,
      },
      type: 'postgres',
      host: config.get('TYPEORM_HOST'),
      port: config.get('TYPEORM_PORT'),
      username: config.get('TYPEORM_USERNAME'),
      password: config.get('TYPEORM_PASSWORD'),
      database: config.get('TYPEORM_DATABASE'),
      synchronize: isProduction ? false : config.get('TYPEORM_SYNCHRONIZE'),
      namingStrategy: new SnakeNamingStrategy(),
      migrationsTableName: 'migrations',
      migrations: [`${migrationDir}/*.ts`],
      cli: { migrationsDir: migrationDir },
      logging:
        config.get('STAGE') === 'test'
          ? false
          : config.get('TYPEORM_LOGGING') === 'true',
      entities: [User, Role, Course],
    };
  },
};
