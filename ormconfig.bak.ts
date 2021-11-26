import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as path from 'path';

const typeOrmMigrationDir =
  'src/infrastructure/persistence/local/typeorm/migration';
const migrationDir = path.join(__dirname, typeOrmMigrationDir);

export = {
  type: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: 'postgres',
  database: 'elemes',
  namingStrategy: new SnakeNamingStrategy(),
  migrationsTableName: 'migrations',
  entities: ['**/*.entity.ts'],
  migrations: [`${migrationDir}/*.ts`],
  cli: { migrationsDir: './src' },
};
