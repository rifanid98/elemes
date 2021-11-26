"use strict";
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const path = require("path");
const typeOrmMigrationDir = 'src/infrastructure/persistence/local/typeorm/migration';
const migrationDir = path.join(__dirname, typeOrmMigrationDir);
module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
    database: 'elemes',
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
    migrationsTableName: 'migrations',
    entities: ['**/*.entity.ts'],
    migrations: [`${migrationDir}/*.ts`],
    cli: { migrationsDir: migrationDir },
};
//# sourceMappingURL=ormconfig.js.map