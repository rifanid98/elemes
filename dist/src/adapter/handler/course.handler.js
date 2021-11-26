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
exports.CourseHandler = void 0;
const common_1 = require("@nestjs/common");
const course_usecase_1 = require("../../usecase/course/course.usecase");
const exception_filter_1 = require("../../sharedkernel/nest/exception-filter");
const swagger_1 = require("@nestjs/swagger");
const course_entity_1 = require("../../domain/entity/course.entity");
const schema_1 = require("../../infrastructure/openapi/schema");
const course_dto_1 = require("../../domain/dto/course.dto");
const guard_1 = require("../../sharedkernel/nest/guard");
const decorator_1 = require("../../sharedkernel/nest/decorator");
const passport_1 = require("@nestjs/passport");
const platform_express_1 = require("@nestjs/platform-express");
const common_config_1 = require("../../sharedkernel/nest/common-config");
let CourseHandler = class CourseHandler {
    constructor(useCase) {
        this.useCase = useCase;
    }
    getCourseCategories() {
        return this.useCase.getCourseCategories();
    }
    getPopularCategories() {
        return this.useCase.getPopularCategories();
    }
    createCourse(course) {
        return this.useCase.createCourse(course);
    }
    getAllCourses(course) {
        return this.useCase.getAllCourses(course);
    }
    getCourseById(id) {
        const course = new course_entity_1.Course();
        course.id = id;
        return this.useCase.getCourseById(course);
    }
    updateCourse(id, course) {
        console.log(course);
        course.id = id;
        return this.useCase.updateCourse(course);
    }
    updateCourseImage(id, file) {
        const course = new course_dto_1.CourseDto();
        course.id = id;
        course.file = file;
        return this.useCase.updateCourse(course);
    }
    deleteCourse(id) {
        const course = new course_entity_1.Course();
        course.id = id;
        return this.useCase.deleteCourse(course);
    }
};
__decorate([
    (0, common_1.Get)('/categories'),
    (0, decorator_1.Roles)(decorator_1.Role.Staff, decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get course categories' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Returns available categories',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseHandler.prototype, "getCourseCategories", null);
__decorate([
    (0, common_1.Get)('/populars'),
    (0, decorator_1.Roles)(decorator_1.Role.Staff, decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get popular categories' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Returns most popular categories',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseHandler.prototype, "getPopularCategories", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, decorator_1.Roles)(decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Add new course' }),
    (0, swagger_1.ApiBody)({ type: schema_1.CourseRequestBody }),
    (0, swagger_1.ApiCreatedResponse)({
        type: schema_1.CourseResponseBody,
        description: 'Course created',
    }),
    (0, swagger_1.ApiConflictResponse)({
        type: schema_1.CourseConflictResponseBody,
        description: 'Course already exists',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_dto_1.CourseDto]),
    __metadata("design:returntype", Promise)
], CourseHandler.prototype, "createCourse", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, decorator_1.Roles)(decorator_1.Role.Staff, decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiQuery)({ type: schema_1.CourseFilter }),
    (0, swagger_1.ApiOperation)({ summary: 'Get all courses' }),
    (0, swagger_1.ApiOkResponse)({
        type: [schema_1.CourseResponseBody],
        description: 'Returns Course entity',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_dto_1.CourseFilterDto]),
    __metadata("design:returntype", Promise)
], CourseHandler.prototype, "getAllCourses", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, decorator_1.Roles)(decorator_1.Role.Staff, decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get course detail' }),
    (0, swagger_1.ApiOkResponse)({
        type: schema_1.CourseResponseBody,
        description: 'Returns Course entity',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        type: schema_1.CourseNotFoundResponse,
        description: 'Course does not exists',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseHandler.prototype, "getCourseById", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, decorator_1.Roles)(decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update course' }),
    (0, swagger_1.ApiBody)({ type: schema_1.CourseRequestBody }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Course updated',
    }),
    (0, swagger_1.ApiConflictResponse)({
        type: schema_1.CourseConflictResponseBody,
        description: 'Course already exists',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        type: schema_1.CourseNotFoundResponse,
        description: 'Course does not exists',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, course_dto_1.CourseDto]),
    __metadata("design:returntype", Promise)
], CourseHandler.prototype, "updateCourse", null);
__decorate([
    (0, common_1.Patch)('/:id/image'),
    (0, decorator_1.Roles)(decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', common_config_1.imageMulterOptions)),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({ type: schema_1.CourseFileRequestBody }),
    (0, swagger_1.ApiOperation)({ summary: 'Update course image' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Course image updated',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        type: schema_1.CourseNotFoundResponse,
        description: 'Course does not exists',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CourseHandler.prototype, "updateCourseImage", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, decorator_1.Roles)(decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete course' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Course deleted',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        type: schema_1.CourseNotFoundResponse,
        description: 'Course does not exists',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseHandler.prototype, "deleteCourse", null);
CourseHandler = __decorate([
    (0, common_1.Controller)('courses'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseFilters)(exception_filter_1.QueryExceptionFilter),
    (0, swagger_1.ApiTags)('Courses'),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    __param(0, (0, common_1.Inject)('CourseUsecase')),
    __metadata("design:paramtypes", [Object])
], CourseHandler);
exports.CourseHandler = CourseHandler;
//# sourceMappingURL=course.handler.js.map