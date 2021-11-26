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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticHandler = void 0;
const common_1 = require("@nestjs/common");
const statistic_usecase_1 = require("../../usecase/statistic/statistic.usecase");
const exception_filter_1 = require("../../sharedkernel/nest/exception-filter");
const swagger_1 = require("@nestjs/swagger");
const schema_1 = require("../../infrastructure/openapi/schema");
const passport_1 = require("@nestjs/passport");
const decorator_1 = require("../../sharedkernel/nest/decorator");
const guard_1 = require("../../sharedkernel/nest/guard");
let StatisticHandler = class StatisticHandler {
    constructor(useCase) {
        this.useCase = useCase;
    }
    getStatistics() {
        return this.useCase.getStatistic();
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, decorator_1.Roles)(decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, common_1.UseFilters)(exception_filter_1.QueryExceptionFilter),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiOperation)({ summary: 'Get statistics' }),
    (0, swagger_1.ApiOkResponse)({
        type: schema_1.StatisticResponseBody,
        description: 'Returns Statistic entity',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatisticHandler.prototype, "getStatistics", null);
StatisticHandler = __decorate([
    (0, common_1.Controller)('statistics'),
    (0, swagger_1.ApiTags)('Statistic'),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    __param(0, (0, common_1.Inject)('StatisticUsecase')),
    __metadata("design:paramtypes", [Object])
], StatisticHandler);
exports.StatisticHandler = StatisticHandler;
//# sourceMappingURL=satistic.handler.js.map