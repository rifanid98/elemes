import { Course } from 'domain/entity/course.entity';
import { CourseFilterDto } from 'src/domain/dto/course.dto';
export declare type Entity = any;
export interface CourseRepository {
    getAllCourses(courseFilter: CourseFilterDto): Promise<Course[]>;
    getOneCourse(course: Course): Promise<Course>;
    countFreeCourses(): Promise<number>;
    countPaidCourses(): Promise<number>;
    getCourseById(couse: Course): Promise<Course>;
    createCourse(course: Course): Promise<Course>;
    updateCourse(course: Course): Promise<boolean>;
    deleteCourse(course: Course): Promise<boolean>;
    getCourseCategories(): Promise<any[]>;
    getPopularCategories(): Promise<any[]>;
}
