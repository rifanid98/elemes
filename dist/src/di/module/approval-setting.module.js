"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalSettingModule = void 0;
const common_1 = require("@nestjs/common");
const approval_setting_handler_1 = require("../../adapter/handler/approval-setting.handler");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../strategy/jwt-strategy");
const config_1 = require("@nestjs/config");
const provider_1 = require("../provider");
const config_2 = require("../config");
const typeorm_1 = require("@nestjs/typeorm");
const repository_1 = require("../../infrastructure/persistence/local/typeorm/repository");
const logger_1 = require("../../sharedkernel/nest/logger");
const request_type_repository_1 = require("../../infrastructure/persistence/local/typeorm/repository/request-type.repository");
let ApprovalSettingModule = class ApprovalSettingModule {
};
ApprovalSettingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync(config_2.JwtConfig),
            typeorm_1.TypeOrmModule.forFeature([
                repository_1.UserLocalRepository,
                repository_1.ApprovalSettingLocalRepository,
                repository_1.ApprovalSettingTypeLocalRepository,
                request_type_repository_1.RequestTypeLocalRepository,
            ]),
        ],
        controllers: [approval_setting_handler_1.ApprovalSettingHandler],
        providers: [...provider_1.ApprovalSettingProvider, jwt_strategy_1.JwtStrategy, logger_1.MainLogger],
    })
], ApprovalSettingModule);
exports.ApprovalSettingModule = ApprovalSettingModule;
//# sourceMappingURL=approval-setting.module.js.map