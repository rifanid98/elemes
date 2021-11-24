import { User } from 'domain/entity/user.entity';
import { Injectable } from '@nestjs/common';

export interface AuthPresenterInterface {
  show(entity: User): User;
  showAll(entity: User): User;
  json(entity: User): User;
}

@Injectable()
export class AuthPresenter extends User implements AuthPresenterInterface {
  show(entity: User): User {
    const presenter = new AuthPresenter();
    presenter.id = entity.id;
    presenter.email = entity.email;
    presenter.authenticator = entity.authenticator;
    return presenter;
  }

  showAll(entity: User): User {
    const presenter = new AuthPresenter();
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
