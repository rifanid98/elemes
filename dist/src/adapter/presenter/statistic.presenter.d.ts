import { Statistic } from 'domain/entity/user.entity';
export interface StatisticPresenterInterface {
    show(entity: Statistic): Statistic;
    showAll(entity: Statistic): Statistic;
    json(entity: Statistic): Statistic;
}
export declare class StatisticPresenter extends Statistic implements StatisticPresenterInterface {
    show(entity: Statistic): Statistic;
    showAll(entity: Statistic): Statistic;
    json(entity: Statistic): Statistic;
}
