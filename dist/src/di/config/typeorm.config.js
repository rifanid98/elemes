"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfig = void 0;
const config_1 = require("@nestjs/config");
const entity_1 = require("../../infrastructure/persistence/local/typeorm/entity");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const path = require("path");
const typeOrmMigrationDir = '../../infrastructure/persistence/local/typeorm/migration';
const migrationDir = path.join(__dirname, typeOrmMigrationDir);
exports.TypeOrmConfig = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async (config) => {
        const isProduction = config.get('STAGE') === 'production';
        return {
            ssl: isProduction,
            type: 'mysql',
            host: config.get('TYPEORM_HOST'),
            port: config.get('TYPEORM_PORT'),
            username: config.get('TYPEORM_USERNAME'),
            password: config.get('TYPEORM_PASSWORD'),
            database: config.get('TYPEORM_DATABASE'),
            synchronize: isProduction ? false : config.get('TYPEORM_SYNCHRONIZE'),
            namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
            migrationsTableName: 'migrations',
            migrations: [`${migrationDir}/*.ts`],
            cli: { migrationsDir: migrationDir },
            logging: config.get('STAGE') === 'test'
                ? false
                : config.get('TYPEORM_LOGGING') === 'true',
            entities: [entity_1.User, entity_1.Role, entity_1.Course],
        };
    },
};
//# sourceMappingURL=typeorm.config.js.map