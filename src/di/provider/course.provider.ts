import { Provider } from '@nestjs/common';
import { CourseInteractor } from 'usecase/course/course.interactor';
import { CoursePresenter } from 'adapter/presenter/course.presenter';
import { File } from 'src/sharedkernel/file';

export const CourseProvider: Provider[] = [
  {
    provide: 'CourseUsecase',
    useClass: CourseInteractor,
  },
  {
    provide: 'CoursePresenterInterface',
    useClass: CoursePresenter,
  },
  {
    provide: File,
    useClass: File,
  },
];
