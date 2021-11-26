import { Document, Types } from 'mongoose';
export interface AuthServiceSchemaInterface {
    message: string;
    meta: Record<string, any>;
    stack: Record<string, any>;
    _id?: Types.ObjectId;
    __v?: number;
}
export declare type AuthServiceDocument = AuthService & Document;
export declare class AuthService implements AuthServiceSchemaInterface {
    message: string;
    meta: Record<string, any>;
    stack: Record<string, any>;
}
export declare const AuthServiceSchema: import("mongoose").Schema<Document<AuthService, any, any>, import("mongoose").Model<Document<AuthService, any, any>, any, any, any>, {}>;
