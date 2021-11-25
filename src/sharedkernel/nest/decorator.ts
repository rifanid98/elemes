import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { User } from 'domain/entity/user.entity';

export enum Role {
  Staff = 'Staff',
  Admin = 'Admin',
  SuperAdmin = 'Super Admin',
}

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const http = ctx.switchToHttp();
    const req = http.getRequest();
    return req.user;
  },
);

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
