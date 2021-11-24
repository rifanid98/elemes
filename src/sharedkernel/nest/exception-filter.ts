import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { GlobalResponse, Response } from 'sharedkernel/response';

@Catch()
export class QueryExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let responsePayload: GlobalResponse;

    if (exception instanceof HttpException) {
      // get common HttpException data with code >= 300
      const responseData = (exception as HttpException).getResponse() as any;

      // if: common HttpException, Http Status Code >= 300
      // else: uncommon HttpException, Http Status Code >= 100 & < 200
      if (typeof responseData === 'object') {
        responsePayload = {
          statusCode: responseData.statusCode,
          message: responseData.message,
          error: responseData.error,
        };
      } else {
        const responseData: any = { ...exception };
        responsePayload = {
          statusCode: responseData.status,
          message: responseData.message,
          error: responseData.name,
        };
      }
    } else if (exception instanceof QueryFailedError) {
      switch ((exception as any).errno) {
        case 1062:
          responsePayload = Response.conflict({
            message: 'Data already exists',
          });
          break;
        default:
          responsePayload = Response.unprocessableentity({
            message: exception.message,
            error: 'Query Error',
          });
          break;
      }
    } else {
      Logger.error(exception);
      responsePayload = Response.error({
        error: 'Internal Server Error',
      });
    }

    return response.status(responsePayload.statusCode).send(responsePayload);
  }
}
