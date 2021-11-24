import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Statistic, StatisticUsecase } from './statistic.usecase';
import {
  CourseLocalRepository,
  UserLocalRepository,
} from 'infrastructure/persistence/local/typeorm/repository';

@Injectable()
export class StatisticInteractor implements StatisticUsecase {
  constructor(
    @InjectRepository(CourseLocalRepository)
    private courseRepository: CourseLocalRepository,
    @InjectRepository(UserLocalRepository)
    private userRepository: UserLocalRepository,
  ) {}

  async getStatistic(): Promise<Statistic> {
    const [freeCourses, paidCourses, users] = await Promise.all([
      this.courseRepository.countFreeCourses(),
      this.courseRepository.countPaidCourses(),
      this.userRepository.countUsers(),
    ]);

    return {
      users: users,
      free_course: freeCourses,
      paid_course: paidCourses,
    };
  }
}
