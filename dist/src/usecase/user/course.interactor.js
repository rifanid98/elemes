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
exports.CourseInteractor = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_presenter_1 = require("../../adapter/presenter/course.presenter");
const course_repository_1 = require("../../infrastructure/persistence/local/typeorm/repository/course.repository");
const course_dto_1 = require("../../domain/dto/course.dto");
const course_entity_1 = require("../../domain/entity/course.entity");
let CourseInteractor = class CourseInteractor {
    constructor(presenter, courseRepository) {
        this.presenter = presenter;
        this.courseRepository = courseRepository;
    }
    createCourse(courseDto) {
        return this.courseRepository.createCourse(courseDto);
    }
    getAllCourses(courseDto) {
        return this.courseRepository.getAllCourses();
    }
    async getCourseById(courseDto) {
        const result = await this.courseRepository.getCourseById(courseDto);
        if (!result) {
            throw new common_1.NotFoundException('Course does not exists');
        }
        return result;
    }
    updateCourse(courseDto) {
        return this.courseRepository.updateCourse(courseDto);
    }
    async deleteCourse(courseDto) {
        const result = await this.courseRepository.deleteCourse(courseDto);
        if (!result) {
            throw new common_1.NotFoundException('Course does not exists');
        }
        return result;
    }
};
CourseInteractor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CoursePresenterInterface')),
    __param(1, (0, typeorm_1.InjectRepository)(course_repository_1.CourseLocalRepository)),
    __metadata("design:paramtypes", [Object, course_repository_1.CourseLocalRepository])
], CourseInteractor);
exports.CourseInteractor = CourseInteractor;
//# sourceMappingURL=course.interactor.js.map