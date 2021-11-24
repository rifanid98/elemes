import { Course } from 'domain/entity/course.entity';

export interface CourseRepository {
  getAllCourses(): Promise<Course[]>;

  getOneCourse(course: Course): Promise<Course>;

  getCourseById(couse: Course): Promise<Course>;

  createCourse(course: Course): Promise<Course>;

  updateCourse(course: Course): Promise<boolean>;

  deleteCourse(course: Course): Promise<boolean>;
}
