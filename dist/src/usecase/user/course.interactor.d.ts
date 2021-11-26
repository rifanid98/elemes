import { CoursePresenterInterface } from 'adapter/presenter/course.presenter';
import { CourseLocalRepository } from 'infrastructure/persistence/local/typeorm/repository/course.repository';
import { CourseUsecase } from './course.usecase';
import { CourseDto, CourseFilterDto } from 'domain/dto/course.dto';
import { Course } from 'domain/entity/course.entity';
export declare class CourseInteractor implements CourseUsecase {
    private presenter;
    private courseRepository;
    constructor(presenter: CoursePresenterInterface, courseRepository: CourseLocalRepository);
    createCourse(courseDto: CourseDto): Promise<Course>;
    getAllCourses(courseDto?: CourseFilterDto): Promise<Course[]>;
    getCourseById(courseDto: CourseDto): Promise<Course>;
    updateCourse(courseDto: CourseDto): Promise<boolean>;
    deleteCourse(courseDto: CourseDto): Promise<boolean>;
}
