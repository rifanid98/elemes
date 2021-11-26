"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtConfig = void 0;
const config_1 = require("@nestjs/config");
exports.JwtConfig = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async (config) => {
        return {
            secret: config.get('JWT_SECRET'),
            signOptions: {
                expiresIn: 3600,
            },
        };
    },
};
//# sourceMappingURL=jwt.config.js.map