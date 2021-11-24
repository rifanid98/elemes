import { Provider } from '@nestjs/common';
import { UserInteractor } from 'usecase/user/user.interactor';
import { UserPresenter } from 'adapter/presenter/user.presenter';
import { Security } from 'sharedkernel/security';
import { Date as DateService } from 'sharedkernel/date';

export const UserProvider: Provider[] = [
  {
    provide: 'UserUsecase',
    useClass: UserInteractor,
  },
  {
    provide: 'UserPresenterInterface',
    useClass: UserPresenter,
  },
  {
    provide: 'SecurityInterface',
    useClass: Security,
  },
  {
    provide: 'DateService',
    useClass: DateService,
  },
];
