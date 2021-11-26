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
exports.ReportQueryDto = exports.NumberOfSalesQueryDto = exports.TargetQueryDto = exports.RevenueQueryDto = exports.ProfitQueryDto = exports.CustomerQueryDto = exports.SalesImportDataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SalesImportDataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    __metadata("design:type", String)
], SalesImportDataDto.prototype, "file", void 0);
exports.SalesImportDataDto = SalesImportDataDto;
class CustomerQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, format: 'DD/MM/YYYY' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/, {
        message: 'date1 should be DD/MM/YYYY date format',
    }),
    __metadata("design:type", String)
], CustomerQueryDto.prototype, "date1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, format: 'DD/MM/YYYY' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/, {
        message: 'date2 should be DD/MM/YYYY date format',
    }),
    __metadata("design:type", String)
], CustomerQueryDto.prototype, "date2", void 0);
exports.CustomerQueryDto = CustomerQueryDto;
class ProfitQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, format: 'DD/MM/YYYY' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/, {
        message: 'date1 should be DD/MM/YYYY date format',
    }),
    __metadata("design:type", String)
], ProfitQueryDto.prototype, "date1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, format: 'DD/MM/YYYY' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/, {
        message: 'date2 should be DD/MM/YYYY date format',
    }),
    __metadata("design:type", String)
], ProfitQueryDto.prototype, "date2", void 0);
exports.ProfitQueryDto = ProfitQueryDto;
class RevenueQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, format: 'DD/MM/YYYY' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/, {
        message: 'date1 should be DD/MM/YYYY date format',
    }),
    __metadata("design:type", String)
], RevenueQueryDto.prototype, "date1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, format: 'DD/MM/YYYY' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/, {
        message: 'date2 should be DD/MM/YYYY date format',
    }),
    __metadata("design:type", String)
], RevenueQueryDto.prototype, "date2", void 0);
exports.RevenueQueryDto = RevenueQueryDto;
class TargetQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, format: 'DD/MM/YYYY' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/, {
        message: 'date1 should be DD/MM/YYYY date format',
    }),
    __metadata("design:type", String)
], TargetQueryDto.prototype, "date1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, format: 'DD/MM/YYYY' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/, {
        message: 'date2 should be DD/MM/YYYY date format',
    }),
    __metadata("design:type", String)
], TargetQueryDto.prototype, "date2", void 0);
exports.TargetQueryDto = TargetQueryDto;
class NumberOfSalesQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, format: 'DD/MM/YYYY' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/, {
        message: 'date1 should be DD/MM/YYYY date format',
    }),
    __metadata("design:type", String)
], NumberOfSalesQueryDto.prototype, "date1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, format: 'DD/MM/YYYY' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/, {
        message: 'date2 should be DD/MM/YYYY date format',
    }),
    __metadata("design:type", String)
], NumberOfSalesQueryDto.prototype, "date2", void 0);
exports.NumberOfSalesQueryDto = NumberOfSalesQueryDto;
class ReportQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, format: 'DD/MM/YYYY' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/, {
        message: 'date1 should be DD/MM/YYYY date format',
    }),
    __metadata("design:type", String)
], ReportQueryDto.prototype, "date1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, format: 'DD/MM/YYYY' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})/, {
        message: 'date2 should be DD/MM/YYYY date format',
    }),
    __metadata("design:type", String)
], ReportQueryDto.prototype, "date2", void 0);
exports.ReportQueryDto = ReportQueryDto;
//# sourceMappingURL=sales.dto.js.map