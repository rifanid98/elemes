import { Statistic, StatisticUsecase } from './statistic.usecase';
import { CourseLocalRepository, UserLocalRepository } from 'infrastructure/persistence/local/typeorm/repository';
export declare class StatisticInteractor implements StatisticUsecase {
    private courseRepository;
    private userRepository;
    constructor(courseRepository: CourseLocalRepository, userRepository: UserLocalRepository);
    getStatistic(): Promise<Statistic>;
}
