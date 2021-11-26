import { User } from 'domain/entity/user.entity';
export interface SalesPresenterInterface {
    show(entity: User): User;
    showAll(entity: User): User;
    json(entity: User): User;
}
export declare class SalesPresenter extends User implements SalesPresenterInterface {
    show(entity: User): User;
    showAll(entity: User): User;
    json(entity: User): User;
}
