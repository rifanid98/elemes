declare type GlobalResponse = {
    statusCode: number;
    message?: string;
    data?: any | any[];
    error?: any | any[];
};
declare type GlobalResponseWithData = {
    message?: string;
    data?: any | any[];
};
declare type GlobalResponseWithError = {
    message?: string;
    error?: any | any[];
};
export declare enum HttpMessage {
    CONTINUE = "Continue",
    SWITCHING_PROTOCOLS = "Switching Protocols",
    PROCESSING = "Processing",
    EARLYHINTS = "Earlyhints",
    OK = "OK",
    CREATED = "Created",
    ACCEPTED = "Accepted",
    NON_AUTHORITATIVE_INFORMATION = "Non Authoritative Information",
    NO_CONTENT = "No Contnent",
    RESET_CONTENT = "Reset Content",
    PARTIAL_CONTENT = "Partial Content",
    AMBIGUOUS = "Ambiguos",
    MOVED_PERMANENTLY = "Moved Permanently",
    FOUND = "Found",
    SEE_OTHER = "See Other",
    NOT_MODIFIED = "Not Modified",
    TEMPORARY_REDIRECT = "Temprary Redirect",
    PERMANENT_REDIRECT = "Permanent Redirect",
    BAD_REQUEST = "Bad Request",
    UNAUTHORIZED = "Unathorized",
    PAYMENT_REQUIRED = "Payment Required",
    FORBIDDEN = "Forbidden",
    NOT_FOUND = "Not Found",
    METHOD_NOT_ALLOWED = "Method Not Allowed",
    NOT_ACCEPTABLE = "Not Acceptable",
    PROXY_AUTHENTICATION_REQUIRED = "Proxy Authentication Required",
    REQUEST_TIMEOUT = "Request Timeout",
    CONFLICT = "Conflict",
    GONE = "Gone",
    LENGTH_REQUIRED = "Length Required",
    PRECONDITION_FAILED = "Precondition Failed",
    PAYLOAD_TOO_LARGE = "Payload Too Large",
    URI_TOO_LONG = "Uri Too Long",
    UNSUPPORTED_MEDIA_TYPE = "Unsupported Media Type",
    REQUESTED_RANGE_NOT_SATISFIABLE = "Requested Range Not Satisfable",
    EXPECTATION_FAILED = "Expectation Failed",
    I_AM_A_TEAPOT = "I Am A Teapot",
    MISDIRECTED = "Misdirected",
    UNPROCESSABLE_ENTITY = "Unprocessable Entity",
    FAILED_DEPENDENCY = "Failed Dependency",
    PRECONDITION_REQUIRED = "Precondition Required",
    TOO_MANY_REQUESTS = "Too Many Requests",
    INTERNAL_SERVER_ERROR = "Internal Server Error",
    NOT_IMPLEMENTED = "Not Implemented",
    BAD_GATEWAY = "Bad Gateway",
    SERVICE_UNAVAILABLE = "Service Unavailable",
    GATEWAY_TIMEOUT = "Gateway Timeout",
    HTTP_VERSION_NOT_SUPPORTED = "HTTP Version Not Supported"
}
declare class Response {
    static resp: GlobalResponse;
    static created(param?: GlobalResponseWithData): GlobalResponse;
    static success(param?: GlobalResponseWithData): GlobalResponse;
    static error(error?: GlobalResponseWithError): GlobalResponse;
    static badrequest(error?: GlobalResponseWithError): GlobalResponse;
    static serviceunavailable(error?: GlobalResponseWithError): GlobalResponse;
    static notfound(error?: GlobalResponseWithError): GlobalResponse;
    static notmodified(error?: GlobalResponseWithError): GlobalResponse;
    static unprocessableentity(error?: GlobalResponseWithError): GlobalResponse;
    static unauthorized(error?: GlobalResponseWithError): GlobalResponse;
    static forbidden(error?: GlobalResponseWithError): GlobalResponse;
    static conflict(error?: GlobalResponseWithError): GlobalResponse;
    static gone(error?: GlobalResponseWithError): GlobalResponse;
    static clear(): void;
}
export { Response, GlobalResponse };
