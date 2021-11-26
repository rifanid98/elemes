import { User } from 'domain/entity/user.entity';
export declare type JwtPayload = {
    email: string;
};
export declare type UserWithToken = User & {
    token: string;
};
export declare type ResponseError = {
    statusCode: number;
    message?: string;
    error?: string;
};
