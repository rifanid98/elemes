import { Course } from 'domain/entity/course.entity';
import { CourseDto, CourseFilterDto } from 'domain/dto/course.dto';

export interface CourseUsecase {
  getAllCourses(courseDto?: CourseFilterDto): Promise<Course[]>;

  getCourseById(courseDto: CourseDto): Promise<Course>;

  createCourse(courseDto: CourseDto): Promise<Course>;

  updateCourse(courseDto: CourseDto): Promise<boolean>;

  deleteCourse(courseDto: CourseDto): Promise<boolean>;

  getCourseCategories(): Promise<any[]>;

  getPopularCategories(): Promise<any[]>;
}
