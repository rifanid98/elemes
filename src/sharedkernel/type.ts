import { User } from 'domain/entity/user.entity';

export type JwtPayload = {
  email: string;
};

export type UserWithToken = User & {
  token: string;
};

export type ResponseError = {
  statusCode: number;
  message?: string;
  error?: string;
};
