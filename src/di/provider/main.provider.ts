import { Provider } from '@nestjs/common';
import { MainLogger } from 'sharedkernel/nest/logger';
import { LoggerMiddleware } from 'sharedkernel/nest/middleware';

export const MainProvider: Provider[] = [
  {
    provide: MainLogger,
    useClass: MainLogger,
  },
  {
    provide: LoggerMiddleware,
    useClass: LoggerMiddleware,
  },
];
