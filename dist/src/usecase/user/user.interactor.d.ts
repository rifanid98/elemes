import { UserPresenterInterface } from 'adapter/presenter/user.presenter';
import { UserLocalRepository } from 'infrastructure/persistence/local/typeorm/repository/user.repository';
import { UserUsecase } from './user.usecase';
import { User as UserEntity } from 'domain/entity/user.entity';
import { UserDto, UserFilterDto } from 'domain/dto/user.dto';
import { SecurityInterface } from 'src/sharedkernel/security';
import { Date as DateService } from 'sharedkernel/date';
export declare class UserInteractor implements UserUsecase {
    private presenter;
    private userRepository;
    private securityService;
    private dateService;
    constructor(presenter: UserPresenterInterface, userRepository: UserLocalRepository, securityService: SecurityInterface, dateService: DateService);
    createUser(userDto: UserDto): Promise<UserEntity>;
    getAllUsers(userDto?: UserFilterDto): Promise<UserEntity[]>;
    getUserById(userDto: UserDto): Promise<UserEntity>;
    updateUser(userDto: UserDto): Promise<boolean>;
    deleteUser(userDto: UserDto): Promise<boolean>;
}
