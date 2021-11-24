import { HttpException, HttpStatus } from '@nestjs/common';

export class NotModifiedException extends HttpException {
  constructor(message?: string) {
    super(message ?? 'Not Modified', HttpStatus.NOT_MODIFIED);
  }
}

export class ContinueException extends HttpException {
  constructor(message?: string) {
    super(message ?? 'Continue', HttpStatus.CONTINUE);
  }
}
