export declare class AuthenticateUnauthorizedResponseBody {
    statusCode: number;
    message: string;
    error: string;
}
export declare class AuthenticateRequestBody {
    authenticator_code: string;
}
export declare class AuthenticateResponseBody {
    token: string;
}
