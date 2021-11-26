"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesModule = void 0;
const common_1 = require("@nestjs/common");
const sales_handler_1 = require("../../adapter/handler/sales.handler");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../strategy/jwt-strategy");
const config_1 = require("@nestjs/config");
const provider_1 = require("../provider");
const config_2 = require("../config");
const typeorm_1 = require("@nestjs/typeorm");
const repository_1 = require("../../infrastructure/persistence/local/typeorm/repository");
const logger_1 = require("../../sharedkernel/nest/logger");
let SalesModule = class SalesModule {
};
SalesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync(config_2.JwtConfig),
            typeorm_1.TypeOrmModule.forFeature([
                repository_1.UserLocalRepository,
                repository_1.CustomerLocalRepository,
                repository_1.EmployeeLocalRepository,
                repository_1.ProjectLocalRepository,
                repository_1.ProfitLocalRepository,
                repository_1.SalesTargetLocalRepository,
            ]),
        ],
        providers: [...provider_1.SalesProvider, jwt_strategy_1.JwtStrategy, logger_1.MainLogger],
        controllers: [sales_handler_1.SalesHandler],
    })
], SalesModule);
exports.SalesModule = SalesModule;
//# sourceMappingURL=sales.module.js.map