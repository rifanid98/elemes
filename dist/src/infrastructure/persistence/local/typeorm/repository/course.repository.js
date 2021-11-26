"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLocalRepository = void 0;
const course_repository_1 = require("../../../../../domain/repository/course.repository");
const typeorm_1 = require("typeorm");
const course_entity_1 = require("../entity/course.entity");
const course_dto_1 = require("../../../../../domain/dto/course.dto");
let CourseLocalRepository = class CourseLocalRepository extends typeorm_1.Repository {
    createCourse(course) {
        return this.save(course);
    }
    getAllCourses(courseFilter) {
        const where = {};
        courseFilter.name && (where['name'] = (0, typeorm_1.ILike)(`%${courseFilter.name}%`));
        courseFilter.category &&
            (where['category'] = (0, typeorm_1.ILike)(`%${courseFilter.category}%`));
        courseFilter.description &&
            (where['description'] = (0, typeorm_1.ILike)(`%${courseFilter.description}%`));
        courseFilter.rating && (where['rating'] = courseFilter.rating);
        courseFilter.bought && (where['bought'] = courseFilter.bought);
        courseFilter.price && (where['price'] = courseFilter.price);
        const order = {};
        if (courseFilter.hasOwnProperty('price_level')) {
            switch (courseFilter.price_level) {
                case course_dto_1.PriceLevel.HIGHEST:
                    order['price'] = 'DESC';
                    break;
                case course_dto_1.PriceLevel.LOWEST:
                    order['price'] = 'ASC';
                    break;
                case course_dto_1.PriceLevel.FREE:
                    where['price'] = 0;
                    break;
            }
        }
        return this.find({
            where,
            order,
        });
    }
    getOneCourse(course) {
        return this.findOne(course);
    }
    getCourseById(course) {
        return this.findOne(course.id);
    }
    async updateCourse(course) {
        const result = await this.update(course.id, course);
        return result.affected > 0;
    }
    async deleteCourse(course) {
        const result = await this.softDelete(course.id);
        return result.affected > 0;
    }
    countFreeCourses() {
        return this.count({
            where: {
                price: 0,
            },
        });
    }
    countPaidCourses() {
        return this.count({
            where: {
                price: (0, typeorm_1.Not)(0),
            },
        });
    }
    getCourseCategories() {
        const query = this.createQueryBuilder('')
            .select('DISTINCT(category)')
            .where('category IS NOT NULL');
        return query.getRawMany();
    }
    getPopularCategories() {
        const query = this.createQueryBuilder('')
            .select('SUM(bought) AS bought, category, SUM(rating) AS rating')
            .where('category IS NOT NULL')
            .groupBy('category')
            .orderBy('bought', 'DESC');
        console.log(query.getQuery());
        return query.getRawMany();
    }
};
CourseLocalRepository = __decorate([
    (0, typeorm_1.EntityRepository)(course_entity_1.Course)
], CourseLocalRepository);
exports.CourseLocalRepository = CourseLocalRepository;
//# sourceMappingURL=course.repository.js.map