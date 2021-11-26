"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModule = void 0;
const common_1 = require("@nestjs/common");
const course_handler_1 = require("../../adapter/handler/course.handler");
const typeorm_1 = require("@nestjs/typeorm");
const repository_1 = require("../../infrastructure/persistence/local/typeorm/repository");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../strategy/jwt-strategy");
const config_1 = require("@nestjs/config");
const config_2 = require("../config");
const logger_1 = require("../../sharedkernel/nest/logger");
const provider_1 = require("../provider");
const services_1 = require("../services");
const cloudinary_module_1 = require("./cloudinary.module");
let CourseModule = class CourseModule {
};
CourseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync(config_2.JwtConfig),
            typeorm_1.TypeOrmModule.forFeature([repository_1.CourseLocalRepository, repository_1.UserLocalRepository]),
            cloudinary_module_1.CloudinaryModule,
        ],
        controllers: [course_handler_1.CourseHandler],
        providers: [...provider_1.CourseProvider, jwt_strategy_1.JwtStrategy, logger_1.MainLogger, services_1.CloudinaryService],
        exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule],
    })
], CourseModule);
exports.CourseModule = CourseModule;
//# sourceMappingURL=course.module.js.map