import { UserEntityInterface } from 'domain/entity/user.entity';
export declare class SigninRequestBody implements UserEntityInterface {
    email: string;
    password: string;
}
export declare class SigninResponseBody {
    token: string;
}
export declare class SigninNotFoundResponseBody {
    statusCode: number;
    message: string;
    error: string;
}
