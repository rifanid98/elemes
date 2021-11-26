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
exports.CourseFileRequestBody = exports.CourseNotFoundResponse = exports.CourseFilter = exports.CourseResponseBody = exports.CourseRequestBody = exports.CourseConflictResponseBody = void 0;
const swagger_1 = require("@nestjs/swagger");
const course_entity_1 = require("../../../domain/entity/course.entity");
const course_dto_1 = require("../../../domain/dto/course.dto");
class CourseConflictResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 409 }),
    __metadata("design:type", Number)
], CourseConflictResponseBody.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Data already exists' }),
    __metadata("design:type", String)
], CourseConflictResponseBody.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Conflict' }),
    __metadata("design:type", String)
], CourseConflictResponseBody.prototype, "error", void 0);
exports.CourseConflictResponseBody = CourseConflictResponseBody;
class CourseRequestBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NestJs From Zero To Hero', required: false }),
    __metadata("design:type", String)
], CourseRequestBody.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'programming', required: false }),
    __metadata("design:type", String)
], CourseRequestBody.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Learning nest.js from scrath', required: false }),
    __metadata("design:type", String)
], CourseRequestBody.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0, required: false }),
    __metadata("design:type", Number)
], CourseRequestBody.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0, required: false }),
    __metadata("design:type", Number)
], CourseRequestBody.prototype, "bought", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50000, required: false }),
    __metadata("design:type", Number)
], CourseRequestBody.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        format: 'binary',
        required: false,
    }),
    __metadata("design:type", Object)
], CourseRequestBody.prototype, "file", void 0);
exports.CourseRequestBody = CourseRequestBody;
class CourseResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CourseResponseBody.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NestJs From Zero To Hero' }),
    __metadata("design:type", String)
], CourseResponseBody.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'programming' }),
    __metadata("design:type", String)
], CourseResponseBody.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Learning nest.js from scrath' }),
    __metadata("design:type", String)
], CourseResponseBody.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CourseResponseBody.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CourseResponseBody.prototype, "bought", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CourseResponseBody.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'programming.png', required: false }),
    __metadata("design:type", String)
], CourseResponseBody.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CourseResponseBody.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CourseResponseBody.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CourseResponseBody.prototype, "deleted_at", void 0);
exports.CourseResponseBody = CourseResponseBody;
class CourseFilter {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], CourseFilter.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], CourseFilter.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], CourseFilter.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], CourseFilter.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], CourseFilter.prototype, "bought", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Number)
], CourseFilter.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: course_dto_1.PriceLevel.HIGHEST,
        enum: course_dto_1.PriceLevel,
        required: false,
    }),
    __metadata("design:type", String)
], CourseFilter.prototype, "price_level", void 0);
exports.CourseFilter = CourseFilter;
class CourseNotFoundResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 404 }),
    __metadata("design:type", Number)
], CourseNotFoundResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Course does not exists' }),
    __metadata("design:type", String)
], CourseNotFoundResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Not Found' }),
    __metadata("design:type", String)
], CourseNotFoundResponse.prototype, "error", void 0);
exports.CourseNotFoundResponse = CourseNotFoundResponse;
class CourseFileRequestBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    __metadata("design:type", String)
], CourseFileRequestBody.prototype, "file", void 0);
exports.CourseFileRequestBody = CourseFileRequestBody;
//# sourceMappingURL=course.schema.js.map