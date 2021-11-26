import { User } from 'domain/entity/user.entity';
export interface CoursePresenterInterface {
    show(entity: User): User;
    showAll(entity: User): User;
    json(entity: User): User;
}
export declare class CoursePresenter extends User implements CoursePresenterInterface {
    show(entity: User): User;
    showAll(entity: User): User;
    json(entity: User): User;
}
