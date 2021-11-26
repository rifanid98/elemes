import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class QueryExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): any;
}
