import { User } from 'domain/entity/user.entity';
export interface UserPresenterInterface {
    show(entity: User): User;
}
export declare class UserPresenter extends User implements UserPresenterInterface {
    show(entity: User): User;
}
