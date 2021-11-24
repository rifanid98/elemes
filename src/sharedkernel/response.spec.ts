import { Response } from 'sharedkernel/response';

const HttpMessage = [
  'Continue',
  'Switching Protocols',
  'Processing',
  'Earlyhints',
  'OK',
  'Created',
  'Accepted',
  'Non Authoritative Information',
  'No Contnent',
  'Reset Content',
  'Partial Content',
  'Ambiguos',
  'Moved Permanently',
  'Found',
  'See Other',
  'Not Modified',
  'Temprary Redirect',
  'Permanent Redirect',
  'Bad Request',
  'Unathorized',
  'Payment Required',
  'Forbidden',
  'Not Found',
  'Method Not Allowed',
  'Not Acceptable',
  'Proxy Authentication Required',
  'Request Timeout',
  'Conflict',
  'Gone',
  'Length Required',
  'Precondition Failed',
  'Payload Too Large',
  'Uri Too Long',
  'Unsupported Media Type',
  'Requested Range Not Satisfable',
  'Expectation Failed',
  'I Am A Teapot',
  'Misdirected',
  'Unprocessable Entity',
  'Failed Dependency',
  'Precondition Required',
  'Too Many Requests',
  'Internal Server Error',
  'Not Implemented',
  'Bad Gateway',
  'Service Unavailable',
  'Gateway Timeout',
  'HTTP Version Not Supported',
];
describe('Response', () => {
  it('should returns response value', () => {
    const methods = Reflect.ownKeys(Response)
      .map((method) => {
        const skippedMethods = ['length', 'prototype', 'name', 'clear'];
        if (skippedMethods.includes(method.toString()) === false) {
          return method;
        }
      })
      .filter((method) => method !== undefined);

    methods.forEach((method) => {
      expect(HttpMessage.includes(Response[method.toString()]().message)).toBe(
        true,
      );
    });
  });
});
