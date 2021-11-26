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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthLogger = exports.MainLogger = void 0;
const common_1 = require("@nestjs/common");
const Winston = require("winston");
const fluentLogger = require("fluent-logger");
const config_1 = require("@nestjs/config");
const auth_schema_1 = require("../../infrastructure/persistence/local/mongodb/schema/auth.schema");
const auth_service_mongodb_repository_service_1 = require("../../infrastructure/persistence/local/mongodb/repository/auth-service.mongodb.repository.service");
const FluentTransport = fluentLogger.support.winstonTransport();
let MainLogger = class MainLogger extends common_1.ConsoleLogger {
    constructor(configService) {
        super();
        this.configService = configService;
        this.setWinstonLogger();
        this.setFluentdTransport();
    }
    error(message, context, stack, data) {
        if (this.printLog()) {
            const argArray = [message];
            stack && argArray.push(stack);
            data && argArray.push(data);
            this.setContext(context);
            super.error.apply(this, argArray);
            this.winston.error({ message, stack });
        }
    }
    log(message, context, data) {
        if (this.printLog()) {
            const argArray = [message];
            data && argArray.push(data);
            this.setContext(context);
            super.log.apply(this, argArray);
            this.winston.info({ message });
        }
    }
    warn(message, context, data) {
        if (this.printLog()) {
            const argArray = [message];
            data && argArray.push(data);
            this.setContext(context);
            super.warn.apply(this, argArray);
            this.winston.warn({ message });
        }
    }
    setContext(context) {
        context && super.setContext(context);
    }
    printLog() {
        const devStage = ['test'];
        return !devStage.includes(this.configService.get('STAGE'));
    }
    setWinstonLogger() {
        this.winston = Winston.createLogger({
            transports: [
                new Winston.transports.File({
                    filename: 'combined.log',
                    dirname: 'log',
                    level: 'verbose',
                }),
                new Winston.transports.File({
                    filename: 'error.log',
                    dirname: 'log',
                    level: 'error',
                }),
            ],
        });
    }
    setFluentdTransport() {
        var _a;
        if (this.configService.get('FLUENTD_AVAILABILITY') === true) {
            this.winston.add(new FluentTransport(this.configService.get('FLUENTD_TAG'), {
                host: this.configService.get('FLUENTD_HOST'),
                port: this.configService.get('FLUENTD_PORT'),
                timeout: this.configService.get('FLUENTD_TIMEOUT'),
                requireAckResponse: (_a = this.configService.get('FLUENTD_REQUIRE_ACK_RESPONSE')) !== null && _a !== void 0 ? _a : false,
            }));
        }
    }
};
MainLogger = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MainLogger);
exports.MainLogger = MainLogger;
let AuthLogger = class AuthLogger extends MainLogger {
    constructor(authServiceRepository, configService) {
        super(configService);
        this.authServiceRepository = authServiceRepository;
    }
    error(message, context, stack, data) {
        super.error(message, context, stack, data);
        if (this.saveAudit()) {
            this.createDocument(message, stack, data);
        }
        return;
    }
    log(message, context, data) {
        super.log(message, context, data);
        if (this.saveAudit()) {
            this.createDocument(message, {}, data);
        }
        return;
    }
    warn(message, context, data) {
        super.warn(message, context, data);
        if (this.saveAudit()) {
            this.createDocument(message, {}, data);
        }
        return;
    }
    saveAudit() {
        const auditStage = [];
        return auditStage.includes(this.configService.get('STAGE'));
    }
    createDocument(message, stack, data) {
        return this.authServiceRepository.create({
            message: message,
            stack: stack,
            meta: data,
        });
    }
};
AuthLogger = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AuthServiceLocalMongodbRepositoryInterface')),
    __metadata("design:paramtypes", [Object, config_1.ConfigService])
], AuthLogger);
exports.AuthLogger = AuthLogger;
//# sourceMappingURL=logger.js.map