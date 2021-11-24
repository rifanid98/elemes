import { CourseRepository } from 'domain/repository/course.repository';
import { EntityRepository, ILike, Not, Repository } from 'typeorm';
import { Course } from '../entity/course.entity';
import { CourseFilterDto, PriceLevel } from 'src/domain/dto/course.dto';

@EntityRepository(Course)
export class CourseLocalRepository
  extends Repository<Course>
  implements CourseRepository
{
  createCourse(course: Course): Promise<Course> {
    return this.save(course);
  }

  getAllCourses(courseFilter: CourseFilterDto): Promise<Course[]> {
    const where: Record<string, any> = {};
    courseFilter.name && (where['name'] = ILike(`%${courseFilter.name}%`));
    courseFilter.category &&
      (where['category'] = ILike(`%${courseFilter.category}%`));
    courseFilter.description &&
      (where['description'] = ILike(`%${courseFilter.description}%`));
    courseFilter.rating && (where['rating'] = courseFilter.rating);
    courseFilter.bought && (where['bought'] = courseFilter.bought);
    courseFilter.price && (where['price'] = courseFilter.price);

    const order: Record<string, any> = {};

    if (courseFilter.hasOwnProperty('price_level')) {
      switch (courseFilter.price_level) {
        case PriceLevel.HIGHEST:
          order['price'] = 'DESC';
          break;
        case PriceLevel.LOWEST:
          order['price'] = 'ASC';
          break;
        case PriceLevel.FREE:
          where['price'] = 0;
          break;
      }
    }

    return this.find({
      where,
      order,
    });
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

  countFreeCourses(): Promise<number> {
    return this.count({
      where: {
        price: 0,
      },
    });
  }

  countPaidCourses(): Promise<number> {
    return this.count({
      where: {
        price: Not(0),
      },
    });
  }

  getCourseCategories(): Promise<any[]> {
    const query = this.createQueryBuilder('')
      .select('DISTINCT(category)')
      .where('category IS NOT NULL');

    return query.getRawMany();
  }

  getPopularCategories(): Promise<any[]> {
    const query = this.createQueryBuilder('')
      .select('SUM(bought) AS bought, category, SUM(rating) AS rating')
      .where('category IS NOT NULL')
      .groupBy('category')
      .orderBy('bought', 'DESC');

    console.log(query.getQuery());

    return query.getRawMany();
  }
}
