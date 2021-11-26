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
exports.SalesHandler = void 0;
const common_1 = require("@nestjs/common");
const sales_usecase_1 = require("../../usecase/sales/sales.usecase");
const exception_filter_1 = require("../../sharedkernel/nest/exception-filter");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const sales_dto_1 = require("../../domain/dto/sales.dto");
const sales_schema_1 = require("../../infrastructure/openapi/schema/sales.schema");
const project_entity_1 = require("../../domain/entity/project.entity");
const schema_1 = require("../../infrastructure/openapi/schema");
const common_config_1 = require("../../sharedkernel/nest/common-config");
const platform_express_1 = require("@nestjs/platform-express");
const logger_1 = require("../../sharedkernel/nest/logger");
const security_1 = require("../../sharedkernel/security");
const decorator_1 = require("../../sharedkernel/nest/decorator");
const user_entity_1 = require("../../domain/entity/user.entity");
let SalesHandler = class SalesHandler {
    constructor(useCase, logger, security) {
        this.useCase = useCase;
        this.logger = logger;
        this.security = security;
        this.context = 'SalesHandler';
    }
    importProject(user, file) {
        this.logger.log(`user imports project data from file`, this.context, file);
        return this.useCase.importProject(file);
    }
    importProfit(user, file) {
        this.logger.log(`user imports project data from file`, this.context, file);
        return this.useCase.importProfit(file);
    }
    importTarget(user, file) {
        this.logger.log(`user imports project data from file`, this.context, file);
        return this.useCase.importTarget(file);
    }
    customer(user, query) {
        this.logger.log(`user gets customer data`, this.context, query);
        return this.useCase.customer(query);
    }
    revenue(query) {
        this.logger.log(`user gets revenue data`, this.context, query);
        return this.useCase.revenue(query);
    }
    profit(user, query) {
        this.logger.log(`user gets profit data`, this.context, query);
        return this.useCase.profit(query);
    }
    numberOfSales(user, query) {
        this.logger.log(`user gets number of sales data`, this.context, query);
        return this.useCase.numberOfSales(query);
    }
    target(query) {
        this.logger.log(`user gets target data`, this.context, query);
        return this.useCase.target(query);
    }
    report(user, query) {
        this.logger.log(`user gets report data`, this.context, query);
        return this.useCase.report(query);
    }
};
__decorate([
    (0, common_1.Post)('import/project'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseFilters)(exception_filter_1.QueryExceptionFilter),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', common_config_1.multerOptions)),
    (0, swagger_1.ApiOperation)({
        summary: 'Import Key Performance Index data from spreadsheet/excel document',
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, swagger_1.ApiBody)({ type: sales_dto_1.SalesImportDataDto, description: 'File to importProject' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Data successfully imported' }),
    (0, swagger_1.ApiUnsupportedMediaTypeResponse)({
        type: sales_schema_1.UnsupportedMediaTypeResponseBody,
        description: 'Invalid media type',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.UnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], SalesHandler.prototype, "importProject", null);
__decorate([
    (0, common_1.Post)('import/profit'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', common_config_1.multerOptions)),
    (0, swagger_1.ApiOperation)({
        summary: 'Import sales_name profit data from spreadsheet/excel document',
    }),
    (0, swagger_1.ApiBody)({ type: sales_dto_1.SalesImportDataDto, description: 'File to importProject' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Data successfully imported' }),
    (0, swagger_1.ApiUnsupportedMediaTypeResponse)({
        type: sales_schema_1.UnsupportedMediaTypeResponseBody,
        description: 'Invalid media type',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.UnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], SalesHandler.prototype, "importProfit", null);
__decorate([
    (0, common_1.Post)('import/target'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', common_config_1.multerOptions)),
    (0, swagger_1.ApiOperation)({
        summary: 'Import sales_name target data from spreadsheet/excel document',
    }),
    (0, swagger_1.ApiBody)({ type: sales_dto_1.SalesImportDataDto, description: 'File to importProject' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Data successfully imported' }),
    (0, swagger_1.ApiUnsupportedMediaTypeResponse)({
        type: sales_schema_1.UnsupportedMediaTypeResponseBody,
        description: 'Invalid media type',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.UnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], SalesHandler.prototype, "importTarget", null);
__decorate([
    (0, common_1.Get)('customer'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, swagger_1.ApiOperation)({ summary: 'Total customer_name' }),
    (0, swagger_1.ApiOkResponse)({
        type: [sales_schema_1.CustomerResponseBody],
        description: 'Year to date total customer_name',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.UnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        sales_dto_1.CustomerQueryDto]),
    __metadata("design:returntype", Promise)
], SalesHandler.prototype, "customer", null);
__decorate([
    (0, common_1.Get)('revenue'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, swagger_1.ApiOperation)({ summary: 'Sales revenue' }),
    (0, swagger_1.ApiOkResponse)({
        type: [sales_schema_1.RevenueResponseBody],
        description: 'Year to date total customer_name',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sales_dto_1.RevenueQueryDto]),
    __metadata("design:returntype", Promise)
], SalesHandler.prototype, "revenue", null);
__decorate([
    (0, common_1.Get)('profit'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, swagger_1.ApiOperation)({ summary: 'Sales Profit' }),
    (0, swagger_1.ApiOkResponse)({
        type: [sales_schema_1.SalesProfitResponseBody],
        description: 'Year to date sales_name profit',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.UnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, sales_dto_1.ProfitQueryDto]),
    __metadata("design:returntype", Promise)
], SalesHandler.prototype, "profit", null);
__decorate([
    (0, common_1.Get)('number-of-sales_name'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, swagger_1.ApiOperation)({ summary: 'Number of sales_name' }),
    (0, swagger_1.ApiOkResponse)({
        type: [sales_schema_1.NumberOfSalesResponseBody],
        description: 'Year to date total customer_name',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.UnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        sales_dto_1.NumberOfSalesQueryDto]),
    __metadata("design:returntype", Promise)
], SalesHandler.prototype, "numberOfSales", null);
__decorate([
    (0, common_1.Get)('target'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, swagger_1.ApiOperation)({ summary: 'Sales Target' }),
    (0, swagger_1.ApiOkResponse)({
        type: [sales_schema_1.SalesTargetResponseBody],
        description: 'Year to date sales_name target',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.UnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sales_dto_1.TargetQueryDto]),
    __metadata("design:returntype", Promise)
], SalesHandler.prototype, "target", null);
__decorate([
    (0, common_1.Get)('report'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, swagger_1.ApiOperation)({ summary: 'Sales Report' }),
    (0, swagger_1.ApiOkResponse)({
        type: [sales_schema_1.SalesTargetResponseBody],
        description: 'Year to date sales_name report',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.UnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, sales_dto_1.ReportQueryDto]),
    __metadata("design:returntype", Promise)
], SalesHandler.prototype, "report", null);
SalesHandler = __decorate([
    (0, common_1.Controller)('sales'),
    (0, swagger_1.ApiTags)('Sales'),
    __param(0, (0, common_1.Inject)('SalesUseCase')),
    __param(2, (0, common_1.Inject)('SecurityInterface')),
    __metadata("design:paramtypes", [Object, logger_1.MainLogger, Object])
], SalesHandler);
exports.SalesHandler = SalesHandler;
//# sourceMappingURL=sales.handler.js.map