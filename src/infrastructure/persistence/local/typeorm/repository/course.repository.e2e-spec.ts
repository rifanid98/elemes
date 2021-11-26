import { Test } from '@nestjs/testing';
import { CourseLocalRepository } from 'infrastructure/persistence/local/typeorm/repository';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'infrastructure/persistence/local/typeorm/entity';
import { INestApplication } from '@nestjs/common';
import * as faker from 'faker';
import { ConfigModuleConfig, TypeOrmConfig } from 'di/config';
import { PriceLevel } from 'src/domain/dto/course.dto';

describe('AuthInteractor', () => {
  let courseRepository: CourseLocalRepository;

  // course data from request body sent by client
  const course = new Course();
  course.name = faker.name.firstName();
  course.rating = faker.datatype.number(5);
  course.price = parseInt(faker.finance.amount(50000, 100000));
  course.bought = faker.datatype.number(100);

  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(ConfigModuleConfig),
        TypeOrmModule.forRootAsync(TypeOrmConfig),
        TypeOrmModule.forFeature([CourseLocalRepository]),
      ],
      providers: [CourseLocalRepository],
    }).compile();

    courseRepository = await module.get(CourseLocalRepository);

    app = module.createNestApplication();
    app.init();
  });

  describe('AuthLocalRepository', () => {
    it('should save course data and returns course entity', async () => {
      const result = await courseRepository.createCourse(course);
      expect(result instanceof Course).toBe(true);
    });

    it('should returns all of courses in database', async () => {
      const result = await courseRepository.getAllCourses({
        price_level: PriceLevel.HIGHEST,
      });
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThanOrEqual(1);
    });

    it('should returns one course from database', async () => {
      // cleaning course data
      delete course.created_at;
      delete course.updated_at;
      delete course.deleted_at;

      const result = await courseRepository.getOneCourse(course);
      expect(result instanceof Course).toBe(true);
      course.id = result.id;
    });

    it('should returns one course by id from database', async () => {
      const result = await courseRepository.getCourseById(course);
      expect(result instanceof Course).toBe(true);
    });

    it('should deletes one course from database', async () => {
      const result = await courseRepository.deleteCourse(course);
      expect(result).toBe(true);
    });
  });

  afterAll(async () => {
    const result = await courseRepository.delete({ name: course.name });
    expect(result.affected > 0).toBe(true);
    await app.close();
  });
});
