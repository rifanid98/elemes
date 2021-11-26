import { Gender, User } from 'domain/entity/user.entity';
export declare class UserDto implements User {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    gender?: Gender;
    birth_place?: string;
    birth_date?: string;
    phone?: string;
    authenticator?: boolean;
}
export declare class UserFilterDto implements User {
    id?: number;
    name?: string;
    email?: string;
    gender?: Gender;
    birth_place?: string;
    birth_date?: string;
    phone?: string;
    authenticator?: boolean;
}
