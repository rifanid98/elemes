import { CourseRepository } from 'domain/repository/course.repository';
import { Repository } from 'typeorm';
import { Course } from '../entity/course.entity';
import { CourseFilterDto } from 'src/domain/dto/course.dto';
export declare class CourseLocalRepository extends Repository<Course> implements CourseRepository {
    createCourse(course: Course): Promise<Course>;
    getAllCourses(courseFilter: CourseFilterDto): Promise<Course[]>;
    getOneCourse(course: Course): Promise<Course>;
    getCourseById(course: Course): Promise<Course>;
    updateCourse(course: Course): Promise<boolean>;
    deleteCourse(course: Course): Promise<boolean>;
    countFreeCourses(): Promise<number>;
    countPaidCourses(): Promise<number>;
    getCourseCategories(): Promise<any[]>;
    getPopularCategories(): Promise<any[]>;
}
