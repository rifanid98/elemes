import { Gender, UserEntityInterface } from 'domain/entity/user.entity';
export declare class UserConflictResponseBody {
    statusCode: number;
    message: string;
    error: string;
}
export declare class UserRequestBody implements UserEntityInterface {
    name?: string;
    email?: string;
    gender?: Gender;
    birth_place?: string;
    birth_date?: string;
    phone?: string;
}
export declare class UserResponseBody implements UserEntityInterface {
    id?: number;
    name?: string;
    email?: string;
    gender?: Gender;
    birth_place?: string;
    birth_date?: string;
    phone?: string;
    authenticator?: boolean;
    role_id?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
export declare class UserFilter implements UserEntityInterface {
    name?: string;
    email?: string;
    gender?: Gender;
    birth_place?: string;
    birth_date?: string;
    phone?: string;
    authenticator?: boolean;
    role_id?: number;
}
export declare class UserNotFoundResponse {
    statusCode: number;
    message: string;
    error: string;
}
