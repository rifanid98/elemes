import { Provider } from '@nestjs/common';
import { StatisticInteractor } from 'usecase/statistic/statistic.interactor';

export const StatisticProvider: Provider[] = [
  {
    provide: 'StatisticUsecase',
    useClass: StatisticInteractor,
  },
];
