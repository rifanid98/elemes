import { User } from 'domain/entity/user.entity';
export interface AuthPresenterInterface {
    show(entity: User): User;
    showAll(entity: User): User;
    json(entity: User): User;
}
export declare class AuthPresenter extends User implements AuthPresenterInterface {
    show(entity: User): User;
    showAll(entity: User): User;
    json(entity: User): User;
}
