"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth.module");
const config_1 = require("@nestjs/config");
const config_2 = require("../config");
const platform_express_1 = require("@nestjs/platform-express");
const middleware_1 = require("../../sharedkernel/nest/middleware");
const provider_1 = require("../provider");
const course_module_1 = require("./course.module");
const statistic_module_1 = require("./statistic.module");
const user_module_1 = require("./user.module");
let MainModule = class MainModule {
    constructor(configService) {
        this.configService = configService;
    }
    configure(consumer) {
        if (this.configService.get('STAGE') !== 'test') {
            consumer
                .apply(middleware_1.LoggerMiddleware)
                .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
        }
    }
};
MainModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(config_2.ConfigModuleConfig),
            typeorm_1.TypeOrmModule.forRootAsync(config_2.TypeOrmConfig),
            platform_express_1.MulterModule.register({ dest: './upload' }),
            auth_module_1.AuthModule,
            course_module_1.CourseModule,
            statistic_module_1.StatisticModule,
            user_module_1.UserModule,
        ],
        controllers: [],
        providers: [...provider_1.MainProvider],
    }),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map