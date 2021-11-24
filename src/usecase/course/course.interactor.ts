import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursePresenterInterface } from 'adapter/presenter/course.presenter';
import { CourseLocalRepository } from 'infrastructure/persistence/local/typeorm/repository/course.repository';
import { CourseUsecase } from './course.usecase';
import { CourseDto, CourseFilterDto } from 'domain/dto/course.dto';
import { Course } from 'domain/entity/course.entity';

@Injectable()
export class CourseInteractor implements CourseUsecase {
  constructor(
    @Inject('CoursePresenterInterface')
    private presenter: CoursePresenterInterface,
    @InjectRepository(CourseLocalRepository)
    private courseRepository: CourseLocalRepository,
  ) {}

  createCourse(courseDto: CourseDto): Promise<Course> {
    return this.courseRepository.createCourse(courseDto);
  }

  getAllCourses(courseDto?: CourseFilterDto): Promise<Course[]> {
    return this.courseRepository.getAllCourses();
  }

  async getCourseById(courseDto: CourseDto): Promise<Course> {
    const result = await this.courseRepository.getCourseById(courseDto);
    if (!result) {
      throw new NotFoundException('Course does not exists');
    }
    return result;
  }

  updateCourse(courseDto: CourseDto): Promise<boolean> {
    return this.courseRepository.updateCourse(courseDto);
  }

  async deleteCourse(courseDto: CourseDto): Promise<boolean> {
    const result = await this.courseRepository.deleteCourse(courseDto);
    if (!result) {
      throw new NotFoundException('Course does not exists');
    }
    return result;
  }
}
