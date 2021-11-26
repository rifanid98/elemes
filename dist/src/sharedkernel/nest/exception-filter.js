"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const response_1 = require("../response");
let QueryExceptionFilter = class QueryExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let responsePayload;
        if (exception instanceof common_1.HttpException) {
            const responseData = exception.getResponse();
            if (typeof responseData === 'object') {
                responsePayload = {
                    statusCode: responseData.statusCode,
                    message: responseData.message,
                    error: responseData.error,
                };
            }
            else {
                const responseData = Object.assign({}, exception);
                responsePayload = {
                    statusCode: responseData.status,
                    message: responseData.message,
                    error: responseData.name,
                };
            }
        }
        else if (exception instanceof typeorm_1.QueryFailedError) {
            switch (exception.errno) {
                case 1062:
                    responsePayload = response_1.Response.conflict({
                        message: 'Data already exists',
                    });
                    break;
                default:
                    responsePayload = response_1.Response.unprocessableentity({
                        message: exception.message,
                        error: 'Query Error',
                    });
                    break;
            }
        }
        else {
            common_1.Logger.error(exception);
            responsePayload = response_1.Response.error({
                error: 'Internal Server Error',
            });
        }
        return response.status(responsePayload.statusCode).send(responsePayload);
    }
};
QueryExceptionFilter = __decorate([
    (0, common_1.Catch)()
], QueryExceptionFilter);
exports.QueryExceptionFilter = QueryExceptionFilter;
//# sourceMappingURL=exception-filter.js.map