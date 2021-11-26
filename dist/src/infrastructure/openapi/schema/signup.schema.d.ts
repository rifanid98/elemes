import { UserEntityInterface } from 'domain/entity/user.entity';
export declare class SignupRequestBody implements UserEntityInterface {
    email: string;
    password: string;
}
export declare class SignupResponseBody implements UserEntityInterface {
    id: number;
    authenticator: boolean;
    email: string;
}
export declare class SignupConflictResponseBody {
    statusCode: number;
    message: string;
    error: string;
}
