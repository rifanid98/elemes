import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as path from 'path';

const typeOrmMigrationDir =
  'src/infrastructure/persistence/local/typeorm/migration';
const migrationDir = path.join(__dirname, typeOrmMigrationDir);

export = {
  type: 'mysql',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: 'root',
  database: 'elemes',
  namingStrategy: new SnakeNamingStrategy(),
  migrationsTableName: 'migrations',
  entities: ['**/*.entity.ts'],
  migrations: [`${migrationDir}/*.ts`],
  cli: { migrationsDir: './src' },
};
