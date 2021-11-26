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
exports.StatisticInteractor = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const repository_1 = require("../../infrastructure/persistence/local/typeorm/repository");
let StatisticInteractor = class StatisticInteractor {
    constructor(courseRepository, userRepository) {
        this.courseRepository = courseRepository;
        this.userRepository = userRepository;
    }
    async getStatistic() {
        const [freeCourses, paidCourses, users] = await Promise.all([
            this.courseRepository.countFreeCourses(),
            this.courseRepository.countPaidCourses(),
            this.userRepository.countUsers(),
        ]);
        return {
            users: users,
            free_course: freeCourses,
            paid_course: paidCourses,
        };
    }
};
StatisticInteractor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(repository_1.CourseLocalRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(repository_1.UserLocalRepository)),
    __metadata("design:paramtypes", [repository_1.CourseLocalRepository,
        repository_1.UserLocalRepository])
], StatisticInteractor);
exports.StatisticInteractor = StatisticInteractor;
//# sourceMappingURL=statistic.interactor.js.map