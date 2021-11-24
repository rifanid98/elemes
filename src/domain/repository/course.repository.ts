import { Course } from 'domain/entity/course.entity';

export type Entity = any;

export interface CourseRepository {
  getAllCourses(): Promise<Course[]>;

  getOneCourse(course: Course): Promise<Course>;

  countFreeCourses(): Promise<number>;

  countPaidCourses(): Promise<number>;

  getCourseById(couse: Course): Promise<Course>;

  createCourse(course: Course): Promise<Course>;

  updateCourse(course: Course): Promise<boolean>;

  deleteCourse(course: Course): Promise<boolean>;
}
