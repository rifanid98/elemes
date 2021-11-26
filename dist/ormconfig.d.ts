import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
declare const _default: {
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    namingStrategy: SnakeNamingStrategy;
    migrationsTableName: string;
    entities: string[];
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
};
export = _default;
