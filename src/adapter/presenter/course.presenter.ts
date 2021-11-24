import { User } from 'domain/entity/user.entity';
import { Injectable } from '@nestjs/common';

export interface CoursePresenterInterface {
  show(entity: User): User;

  showAll(entity: User): User;

  json(entity: User): User;
}

@Injectable()
export class CoursePresenter extends User implements CoursePresenterInterface {
  show(entity: User): User {
    const presenter = new CoursePresenter();
    presenter.id = entity.id;
    presenter.email = entity.email;
    return presenter;
  }

  showAll(entity: User): User {
    const presenter = new CoursePresenter();
    Object.keys(entity).forEach((key: string) => {
      if (key !== 'password') {
        presenter[key] = entity[key];
      }
    });
    return presenter;
  }

  json(entity: User): User {
    return { ...entity };
  }
}
