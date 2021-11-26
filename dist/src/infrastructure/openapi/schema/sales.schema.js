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
exports.SalesTargetResponseBody = exports.SalesProfitResponseBody = exports.NumberOfSalesResponseBody = exports.RevenueResponseBody = exports.CustomerResponseBody = exports.UnsupportedMediaTypeResponseBody = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const response_1 = require("../../../sharedkernel/response");
class UnsupportedMediaTypeResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: common_1.HttpStatus.UNSUPPORTED_MEDIA_TYPE }),
    __metadata("design:type", Number)
], UnsupportedMediaTypeResponseBody.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Only 'documentType' files are allowed!" }),
    __metadata("design:type", String)
], UnsupportedMediaTypeResponseBody.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: response_1.HttpMessage.UNSUPPORTED_MEDIA_TYPE }),
    __metadata("design:type", String)
], UnsupportedMediaTypeResponseBody.prototype, "error", void 0);
exports.UnsupportedMediaTypeResponseBody = UnsupportedMediaTypeResponseBody;
class CustomerResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'PT. NashTa Global Utama' }),
    __metadata("design:type", String)
], CustomerResponseBody.prototype, "customer_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10' }),
    __metadata("design:type", String)
], CustomerResponseBody.prototype, "count", void 0);
exports.CustomerResponseBody = CustomerResponseBody;
class RevenueResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'january' }),
    __metadata("design:type", String)
], RevenueResponseBody.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [{ name: 'Peppy Minarosa', total: '39362280001' }],
    }),
    __metadata("design:type", Array)
], RevenueResponseBody.prototype, "sales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3936228000' }),
    __metadata("design:type", String)
], RevenueResponseBody.prototype, "total", void 0);
exports.RevenueResponseBody = RevenueResponseBody;
class NumberOfSalesResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'january' }),
    __metadata("design:type", String)
], NumberOfSalesResponseBody.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [{ name: 'Peppy Minarosa', total: '1' }],
    }),
    __metadata("design:type", Array)
], NumberOfSalesResponseBody.prototype, "sales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], NumberOfSalesResponseBody.prototype, "total", void 0);
exports.NumberOfSalesResponseBody = NumberOfSalesResponseBody;
class SalesProfitResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'january' }),
    __metadata("design:type", String)
], SalesProfitResponseBody.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [{ name: 'Peppy Minarosa', total: '93622800' }],
    }),
    __metadata("design:type", Array)
], SalesProfitResponseBody.prototype, "sales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '93622800' }),
    __metadata("design:type", String)
], SalesProfitResponseBody.prototype, "total", void 0);
exports.SalesProfitResponseBody = SalesProfitResponseBody;
class SalesTargetResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'january' }),
    __metadata("design:type", String)
], SalesTargetResponseBody.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [{ name: 'Peppy Minarosa', total: '500000000' }],
    }),
    __metadata("design:type", Array)
], SalesTargetResponseBody.prototype, "sales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '500000000' }),
    __metadata("design:type", String)
], SalesTargetResponseBody.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '500000000' }),
    __metadata("design:type", String)
], SalesTargetResponseBody.prototype, "ytd", void 0);
exports.SalesTargetResponseBody = SalesTargetResponseBody;
//# sourceMappingURL=sales.schema.js.map