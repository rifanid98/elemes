"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainProvider = void 0;
const logger_1 = require("../../sharedkernel/nest/logger");
const middleware_1 = require("../../sharedkernel/nest/middleware");
exports.MainProvider = [
    {
        provide: logger_1.MainLogger,
        useClass: logger_1.MainLogger,
    },
    {
        provide: middleware_1.LoggerMiddleware,
        useClass: middleware_1.LoggerMiddleware,
    },
];
//# sourceMappingURL=main.provider.js.map