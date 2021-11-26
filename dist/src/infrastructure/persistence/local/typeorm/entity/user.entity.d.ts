import { Gender, UserEntityInterface } from 'domain/entity/user.entity';
import { Role } from '.';
export declare class User implements UserEntityInterface {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    gender?: Gender;
    birth_place?: string;
    birth_date?: string;
    phone?: string;
    authenticator?: boolean;
    authenticator_secret?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    role?: Role;
}
