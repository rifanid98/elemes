import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { MainLogger } from 'sharedkernel/nest/logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly context: string;

  constructor(private logger: MainLogger) {
    this.context = 'HTTP';
  }

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, path: url } = request;
    const userAgent = request.get('user-agent') || '';
    const { statusCode } = response;
    const contentLength = response.get('content-length');

    response.on('error', (error) => {
      this.logger.error(
        `${method} - ${url} - ${statusCode} - Length ${
          contentLength ?? '0'
        } - ${ip} - ${userAgent}`,
        this.context,
        error,
      );
    });

    response.on('finish', () => {
      this.logger.log(
        `${method} - ${url} - ${statusCode} - Length ${
          contentLength ?? '0'
        } - ${ip} - ${userAgent}`,
        this.context,
      );
    });

    next();
  }
}
