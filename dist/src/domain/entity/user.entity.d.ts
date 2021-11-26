export declare enum Gender {
    MALE = "male",
    FEMALE = "female"
}
export interface UserEntityInterface {
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
}
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
}
