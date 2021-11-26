"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = require("./logger");
let LoggerMiddleware = class LoggerMiddleware {
    constructor(logger) {
        this.logger = logger;
        this.context = 'HTTP';
    }
    use(request, response, next) {
        const { ip, method, path: url } = request;
        const userAgent = request.get('user-agent') || '';
        const { statusCode } = response;
        const contentLength = response.get('content-length');
        response.on('error', (error) => {
            this.logger.error(`${method} - ${url} - ${statusCode} - Length ${contentLength !== null && contentLength !== void 0 ? contentLength : '0'} - ${ip} - ${userAgent}`, this.context, error);
        });
        response.on('finish', () => {
            this.logger.log(`${method} - ${url} - ${statusCode} - Length ${contentLength !== null && contentLength !== void 0 ? contentLength : '0'} - ${ip} - ${userAgent}`, this.context);
        });
        next();
    }
};
LoggerMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_1.MainLogger])
], LoggerMiddleware);
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=middleware.js.map