import { Provider } from '@nestjs/common';
import { CourseInteractor } from 'usecase/course/course.interactor';
import { CoursePresenter } from 'adapter/presenter/course.presenter';

export const CourseProvider: Provider[] = [
  {
    provide: 'CourseUsecase',
    useClass: CourseInteractor,
  },
  {
    provide: 'CoursePresenterInterface',
    useClass: CoursePresenter,
  },
];
