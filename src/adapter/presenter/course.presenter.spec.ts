import { Course } from 'domain/entity/course.entity';
import { CoursePresenter } from 'adapter/presenter/course.presenter';
import faker from 'faker';

describe('CoursePresenter', () => {
  const presenter = new CoursePresenter();

  const course = new Course();
  course.id = 1;
  course.name = faker.name.firstName();
  course.rating = faker.datatype.number(5);
  course.price = parseInt(faker.finance.amount(50000, 100000));
  course.bought = faker.datatype.number(100);

  it('should parse course data and remove the password', () => {
    const publicCourse = presenter.show(course);
    expect(publicCourse.hasOwnProperty('password')).toBe(false);
  });

  it('should parse course data and show all data except password', () => {
    const publicCourse = presenter.showAll(course);
    expect(publicCourse.hasOwnProperty('password')).toBe(false);
    expect(Object.keys(publicCourse).length).toBeGreaterThanOrEqual(
      Object.keys(course).length - 1,
    );
  });

  it('should parse course entity class to plain object', () => {
    const plainCourse = presenter.json(course);
    expect(plainCourse instanceof Course).toBe(false);
  });
});
