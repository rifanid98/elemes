import { Statistic, StatisticUsecase } from 'usecase/statistic/statistic.usecase';
export declare class StatisticHandler {
    private useCase;
    constructor(useCase: StatisticUsecase);
    getStatistics(): Promise<Statistic>;
}
