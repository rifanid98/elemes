"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = exports.HttpMessage = void 0;
const common_1 = require("@nestjs/common");
var HttpMessage;
(function (HttpMessage) {
    HttpMessage["CONTINUE"] = "Continue";
    HttpMessage["SWITCHING_PROTOCOLS"] = "Switching Protocols";
    HttpMessage["PROCESSING"] = "Processing";
    HttpMessage["EARLYHINTS"] = "Earlyhints";
    HttpMessage["OK"] = "OK";
    HttpMessage["CREATED"] = "Created";
    HttpMessage["ACCEPTED"] = "Accepted";
    HttpMessage["NON_AUTHORITATIVE_INFORMATION"] = "Non Authoritative Information";
    HttpMessage["NO_CONTENT"] = "No Contnent";
    HttpMessage["RESET_CONTENT"] = "Reset Content";
    HttpMessage["PARTIAL_CONTENT"] = "Partial Content";
    HttpMessage["AMBIGUOUS"] = "Ambiguos";
    HttpMessage["MOVED_PERMANENTLY"] = "Moved Permanently";
    HttpMessage["FOUND"] = "Found";
    HttpMessage["SEE_OTHER"] = "See Other";
    HttpMessage["NOT_MODIFIED"] = "Not Modified";
    HttpMessage["TEMPORARY_REDIRECT"] = "Temprary Redirect";
    HttpMessage["PERMANENT_REDIRECT"] = "Permanent Redirect";
    HttpMessage["BAD_REQUEST"] = "Bad Request";
    HttpMessage["UNAUTHORIZED"] = "Unathorized";
    HttpMessage["PAYMENT_REQUIRED"] = "Payment Required";
    HttpMessage["FORBIDDEN"] = "Forbidden";
    HttpMessage["NOT_FOUND"] = "Not Found";
    HttpMessage["METHOD_NOT_ALLOWED"] = "Method Not Allowed";
    HttpMessage["NOT_ACCEPTABLE"] = "Not Acceptable";
    HttpMessage["PROXY_AUTHENTICATION_REQUIRED"] = "Proxy Authentication Required";
    HttpMessage["REQUEST_TIMEOUT"] = "Request Timeout";
    HttpMessage["CONFLICT"] = "Conflict";
    HttpMessage["GONE"] = "Gone";
    HttpMessage["LENGTH_REQUIRED"] = "Length Required";
    HttpMessage["PRECONDITION_FAILED"] = "Precondition Failed";
    HttpMessage["PAYLOAD_TOO_LARGE"] = "Payload Too Large";
    HttpMessage["URI_TOO_LONG"] = "Uri Too Long";
    HttpMessage["UNSUPPORTED_MEDIA_TYPE"] = "Unsupported Media Type";
    HttpMessage["REQUESTED_RANGE_NOT_SATISFIABLE"] = "Requested Range Not Satisfable";
    HttpMessage["EXPECTATION_FAILED"] = "Expectation Failed";
    HttpMessage["I_AM_A_TEAPOT"] = "I Am A Teapot";
    HttpMessage["MISDIRECTED"] = "Misdirected";
    HttpMessage["UNPROCESSABLE_ENTITY"] = "Unprocessable Entity";
    HttpMessage["FAILED_DEPENDENCY"] = "Failed Dependency";
    HttpMessage["PRECONDITION_REQUIRED"] = "Precondition Required";
    HttpMessage["TOO_MANY_REQUESTS"] = "Too Many Requests";
    HttpMessage["INTERNAL_SERVER_ERROR"] = "Internal Server Error";
    HttpMessage["NOT_IMPLEMENTED"] = "Not Implemented";
    HttpMessage["BAD_GATEWAY"] = "Bad Gateway";
    HttpMessage["SERVICE_UNAVAILABLE"] = "Service Unavailable";
    HttpMessage["GATEWAY_TIMEOUT"] = "Gateway Timeout";
    HttpMessage["HTTP_VERSION_NOT_SUPPORTED"] = "HTTP Version Not Supported";
})(HttpMessage = exports.HttpMessage || (exports.HttpMessage = {}));
class Response {
    static created(param) {
        this.clear();
        this.resp.statusCode = common_1.HttpStatus.CREATED;
        this.resp.message = (param === null || param === void 0 ? void 0 : param.message) ? param.message : HttpMessage.CREATED;
        (param === null || param === void 0 ? void 0 : param.data) ? (this.resp.data = param.data) : false;
        return this.resp;
    }
    static success(param) {
        this.clear();
        this.resp.statusCode = common_1.HttpStatus.OK;
        this.resp.message = (param === null || param === void 0 ? void 0 : param.message) ? param.message : HttpMessage.OK;
        (param === null || param === void 0 ? void 0 : param.data) && (this.resp.data = param.data);
        return new common_1.HttpException(Object.assign({}, this.resp), common_1.HttpStatus.OK).getResponse();
    }
    static error(error) {
        this.clear();
        this.resp.statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        if (error === null || error === void 0 ? void 0 : error.message) {
            this.resp.message = error.message;
            this.resp.error = HttpMessage.INTERNAL_SERVER_ERROR;
        }
        else
            this.resp.message = HttpMessage.INTERNAL_SERVER_ERROR;
        return this.resp;
    }
    static badrequest(error) {
        this.clear();
        this.resp.statusCode = common_1.HttpStatus.BAD_REQUEST;
        if (error === null || error === void 0 ? void 0 : error.message) {
            this.resp.message = error.message;
            this.resp.error = HttpMessage.BAD_REQUEST;
        }
        else
            this.resp.message = HttpMessage.BAD_REQUEST;
        return this.resp;
    }
    static serviceunavailable(error) {
        this.clear();
        this.resp.statusCode = common_1.HttpStatus.SERVICE_UNAVAILABLE;
        if (error === null || error === void 0 ? void 0 : error.message) {
            this.resp.message = error.message;
            this.resp.error = HttpMessage.SERVICE_UNAVAILABLE;
        }
        else
            this.resp.message = HttpMessage.SERVICE_UNAVAILABLE;
        return this.resp;
    }
    static notfound(error) {
        this.clear();
        this.resp.statusCode = common_1.HttpStatus.NOT_FOUND;
        if (error === null || error === void 0 ? void 0 : error.message) {
            this.resp.message = error.message;
            this.resp.error = HttpMessage.NOT_FOUND;
        }
        else
            this.resp.message = HttpMessage.NOT_FOUND;
        return this.resp;
    }
    static notmodified(error) {
        this.clear();
        this.resp.statusCode = common_1.HttpStatus.NOT_MODIFIED;
        if (error === null || error === void 0 ? void 0 : error.message) {
            this.resp.message = error.message;
            this.resp.error = HttpMessage.NOT_MODIFIED;
        }
        else
            this.resp.message = HttpMessage.NOT_MODIFIED;
        return this.resp;
    }
    static unprocessableentity(error) {
        this.clear();
        this.resp.statusCode = common_1.HttpStatus.UNPROCESSABLE_ENTITY;
        if (error === null || error === void 0 ? void 0 : error.message) {
            this.resp.message = error.message;
            this.resp.error = HttpMessage.UNPROCESSABLE_ENTITY;
        }
        else
            this.resp.message = HttpMessage.UNPROCESSABLE_ENTITY;
        return this.resp;
    }
    static unauthorized(error) {
        this.clear();
        this.resp.statusCode = common_1.HttpStatus.UNAUTHORIZED;
        if (error === null || error === void 0 ? void 0 : error.message) {
            this.resp.message = error.message;
            this.resp.error = HttpMessage.UNAUTHORIZED;
        }
        else
            this.resp.message = HttpMessage.UNAUTHORIZED;
        return this.resp;
    }
    static forbidden(error) {
        this.clear();
        this.resp.statusCode = common_1.HttpStatus.FORBIDDEN;
        if (error === null || error === void 0 ? void 0 : error.message) {
            this.resp.message = error.message;
            this.resp.error = HttpMessage.FORBIDDEN;
        }
        else
            this.resp.message = HttpMessage.FORBIDDEN;
        return this.resp;
    }
    static conflict(error) {
        this.clear();
        this.resp.statusCode = common_1.HttpStatus.CONFLICT;
        if (error === null || error === void 0 ? void 0 : error.message) {
            this.resp.message = error.message;
            this.resp.error = HttpMessage.CONFLICT;
        }
        else
            this.resp.message = HttpMessage.CONFLICT;
        return this.resp;
    }
    static gone(error) {
        this.clear();
        this.resp.statusCode = common_1.HttpStatus.GONE;
        if (error === null || error === void 0 ? void 0 : error.message) {
            this.resp.message = error.message;
            this.resp.error = HttpMessage.GONE;
        }
        else
            this.resp.message = HttpMessage.GONE;
        return this.resp;
    }
    static clear() {
        this.resp = { statusCode: 0 };
    }
}
exports.Response = Response;
//# sourceMappingURL=response.js.map