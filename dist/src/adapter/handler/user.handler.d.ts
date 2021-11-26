import { UserUsecase } from 'usecase/user/user.usecase';
import { User } from 'domain/entity/user.entity';
import { UserDto, UserFilterDto } from 'domain/dto/user.dto';
export declare class UserHandler {
    private useCase;
    constructor(useCase: UserUsecase);
    createUser(user: UserDto): Promise<User>;
    getAllUsers(user?: UserFilterDto): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    updateUser(id: number, user: UserDto): Promise<boolean>;
    deleteUser(id: number): Promise<boolean>;
}
