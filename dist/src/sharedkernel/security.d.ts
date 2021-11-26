export interface SecurityInterface {
    hash(value: string): Promise<string>;
    verify(plain: string, hashed: string): Promise<boolean>;
    clear<T>(value: Record<string, any>): T;
}
export declare class Security implements SecurityInterface {
    hash(value: string): Promise<string>;
    verify(plain: string, hashed: string): Promise<boolean>;
    clear<T>(data: Record<string, any>): T;
}
