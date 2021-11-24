import { Provider } from '@nestjs/common';
import { AuthInteractor } from 'usecase/auth/auth.interactor';
import { AuthPresenter } from 'adapter/presenter/auth.presenter';
import { Authenticator } from 'sharedkernel/authenticator';
import { Security } from 'sharedkernel/security';

export const AuthProvider: Provider[] = [
  {
    provide: 'AuthUseCase',
    useClass: AuthInteractor,
  },
  {
    provide: 'AuthPresenterInterface',
    useClass: AuthPresenter,
  },
  {
    provide: 'AuthenticatorInterface',
    useClass: Authenticator,
  },
  {
    provide: 'SecurityInterface',
    useClass: Security,
  },
  // {
  //   provide: AuthLogger,
  //   useClass: AuthLogger,
  // },
  // {
  //   provide: 'AuthServiceLocalMongodbRepositoryInterface',
  //   useClass: AuthServiceLocalMongodbRepository,
  // },
];
