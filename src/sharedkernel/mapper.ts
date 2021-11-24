import { Injectable } from '@nestjs/common';

type ObjectLiteral = Record<string, any>;

export interface MapperInterface {
  map<FROM extends ObjectLiteral, TO extends ObjectLiteral>(data: FROM): TO;
}

@Injectable()
export class Mapper implements MapperInterface {
  map<FROM extends ObjectLiteral, TO extends ObjectLiteral>(data: FROM): TO {
    const destination: ObjectLiteral = {};

    Object.keys(data).forEach((key) => {
      if (!key.includes('id')) {
        destination[key] = data[key];
      }
    });

    return destination as TO;
  }
}
