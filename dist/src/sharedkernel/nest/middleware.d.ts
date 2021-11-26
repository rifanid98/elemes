import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { MainLogger } from 'sharedkernel/nest/logger';
export declare class LoggerMiddleware implements NestMiddleware {
    private logger;
    private readonly context;
    constructor(logger: MainLogger);
    use(request: Request, response: Response, next: NextFunction): void;
}
