import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export interface AuthServiceSchemaInterface {
  message: string;
  meta: Record<string, any>;
  stack: Record<string, any>;
  _id?: Types.ObjectId;
  __v?: number;
}

export type AuthServiceDocument = AuthService & Document;

@Schema()
export class AuthService implements AuthServiceSchemaInterface {
  @Prop({ required: true })
  message: string;

  @Prop({ type: Types.Map, required: false })
  meta: Record<string, any>;

  @Prop({ type: Types.Map, required: false })
  stack: Record<string, any>;
}

export const AuthServiceSchema = SchemaFactory.createForClass(AuthService);
