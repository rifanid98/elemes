import { HttpException } from '@nestjs/common';
export declare class NotModifiedException extends HttpException {
    constructor(message?: string);
}
export declare class ContinueException extends HttpException {
    constructor(message?: string);
}
