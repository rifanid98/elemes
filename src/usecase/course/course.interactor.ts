import {
  Inject,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursePresenterInterface } from 'adapter/presenter/course.presenter';
import { CourseLocalRepository } from 'infrastructure/persistence/local/typeorm/repository/course.repository';
import { CourseUsecase } from './course.usecase';
import { CourseDto, CourseFilterDto } from 'domain/dto/course.dto';
import { Course } from 'domain/entity/course.entity';
import { File } from 'sharedkernel/file';

@Injectable()
export class CourseInteractor implements CourseUsecase {
  constructor(
    @Inject('CoursePresenterInterface')
    private presenter: CoursePresenterInterface,
    @InjectRepository(CourseLocalRepository)
    private courseRepository: CourseLocalRepository,
    private fileService: File,
  ) {}

  createCourse(courseDto: CourseDto): Promise<Course> {
    return this.courseRepository.createCourse(courseDto);
  }

  getAllCourses(courseDto?: CourseFilterDto): Promise<Course[]> {
    return this.courseRepository.getAllCourses(courseDto);
  }

  async getCourseById(courseDto: CourseDto): Promise<Course> {
    const result = await this.courseRepository.getCourseById(courseDto);
    if (!result) {
      throw new NotFoundException('Course does not exists');
    }
    return result;
  }

  async updateCourse(courseDto: CourseDto): Promise<boolean> {
    const file: Express.Multer.File = courseDto.file;

    if (file) {
      const uploaded = await this.fileService.upload(file);
      if (!uploaded) {
        console.log('Cloudinary Error', uploaded);
        throw new ServiceUnavailableException(
          'Something was hapened with cludinary.',
        );
      }

      courseDto.image = uploaded.secure_url;
    }

    delete courseDto.file;
    const result = await this.courseRepository.updateCourse(courseDto);

    if (result) {
      const deleted = await this.fileService.delete(
        file.destination + '/' + file.filename,
      );

      if (!deleted) {
        console.log('Failed to delete file');
      }
    }

    return result;
  }

  async deleteCourse(courseDto: CourseDto): Promise<boolean> {
    const result = await this.courseRepository.deleteCourse(courseDto);
    if (!result) {
      throw new NotFoundException('Course does not exists');
    }
    return result;
  }

  async getCourseCategories(): Promise<any[]> {
    const result = await this.courseRepository.getCourseCategories();
    console.log(result);
    return result;
  }

  async getPopularCategories(): Promise<any[]> {
    return await this.courseRepository.getPopularCategories();
  }
}
