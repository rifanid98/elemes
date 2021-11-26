/// <reference types="multer" />
import { CourseUsecase } from 'usecase/course/course.usecase';
import { Course } from 'domain/entity/course.entity';
import { CourseDto, CourseFilterDto } from 'domain/dto/course.dto';
export declare class CourseHandler {
    private useCase;
    constructor(useCase: CourseUsecase);
    getCourseCategories(): Promise<any[]>;
    getPopularCategories(): Promise<any[]>;
    createCourse(course: CourseDto): Promise<Course>;
    getAllCourses(course?: CourseFilterDto): Promise<Course[]>;
    getCourseById(id: number): Promise<Course>;
    updateCourse(id: number, course: CourseDto): Promise<boolean>;
    updateCourseImage(id: number, file: Express.Multer.File): Promise<boolean>;
    deleteCourse(id: number): Promise<boolean>;
}
