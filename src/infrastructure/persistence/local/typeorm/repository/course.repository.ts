import { CourseRepository } from 'domain/repository/course.repository';
import { EntityRepository, Repository } from 'typeorm';
import { Course } from '../entity/course.entity';

@EntityRepository(Course)
export class CourseLocalRepository
  extends Repository<Course>
  implements CourseRepository
{
  createCourse(course: Course): Promise<Course> {
    return this.save(course);
  }

  getAllCourses(): Promise<Course[]> {
    return this.find();
  }

  getOneCourse(course: Course): Promise<Course> {
    return this.findOne(course);
  }

  getCourseById(course: Course): Promise<Course> {
    return this.findOne(course.id);
  }

  async updateCourse(course: Course): Promise<boolean> {
    const result = await this.update(course.id, course);
    return result.affected > 0;
  }

  async deleteCourse(course: Course): Promise<boolean> {
    const result = await this.softDelete(course.id);
    return result.affected > 0;
  }
}
