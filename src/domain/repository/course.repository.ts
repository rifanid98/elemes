import { Course } from 'domain/entity/course.entity';

export interface CourseRepository {
  getAllCourses(): Promise<Course[]>;
  getOneCourse(user: Course): Promise<Course>;
  getCourseById(id: number): Promise<Course>;
  createCourse(user: Course): Promise<Course>;
  updateCourse(user: Course): Promise<boolean>;
  deleteCourse(user: Course): Promise<boolean>;
}
