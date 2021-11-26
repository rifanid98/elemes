"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContinueException = exports.NotModifiedException = void 0;
const common_1 = require("@nestjs/common");
class NotModifiedException extends common_1.HttpException {
    constructor(message) {
        super(message !== null && message !== void 0 ? message : 'Not Modified', common_1.HttpStatus.NOT_MODIFIED);
    }
}
exports.NotModifiedException = NotModifiedException;
class ContinueException extends common_1.HttpException {
    constructor(message) {
        super(message !== null && message !== void 0 ? message : 'Continue', common_1.HttpStatus.CONTINUE);
    }
}
exports.ContinueException = ContinueException;
//# sourceMappingURL=exception.js.map