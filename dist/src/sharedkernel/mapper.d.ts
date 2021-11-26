declare type ObjectLiteral = Record<string, any>;
export interface MapperInterface {
    map<FROM extends ObjectLiteral, TO extends ObjectLiteral>(data: FROM): TO;
}
export declare class Mapper implements MapperInterface {
    map<FROM extends ObjectLiteral, TO extends ObjectLiteral>(data: FROM): TO;
}
export {};
