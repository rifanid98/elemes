import { ApiProperty } from '@nestjs/swagger';
import { Gender, UserEntityInterface } from 'domain/entity/user.entity';

export class UserConflictResponseBody {
  @ApiProperty({ example: 409 })
  statusCode: number;

  @ApiProperty({ example: 'Data already exists' })
  message: string;

  @ApiProperty({ example: 'Conflict' })
  error: string;
}

export class UserRequestBody implements UserEntityInterface {
  @ApiProperty({ example: 'User', required: false })
  name?: string;

  @ApiProperty({ example: 'user@email.com', required: false })
  email?: string;

  @ApiProperty({ example: Gender.MALE, required: false })
  gender?: Gender;

  @ApiProperty({ example: 'Bogor', required: false })
  birth_place?: string;

  @ApiProperty({ example: '21/11/1998', required: false })
  birth_date?: string;

  @ApiProperty({ example: '089606415122', required: false })
  phone?: string;
}

export class UserResponseBody implements UserEntityInterface {
  @ApiProperty({ example: 1 })
  id?: number;

  @ApiProperty({ example: 'User' })
  name?: string;

  @ApiProperty({ example: 'user@email.com' })
  email?: string;

  @ApiProperty({ example: Gender.MALE })
  gender?: Gender;

  @ApiProperty({ example: 'Bogor' })
  birth_place?: string;

  @ApiProperty({ example: '21/11/1998' })
  birth_date?: string;

  @ApiProperty({ example: '089606415122' })
  phone?: string;

  @ApiProperty({ example: true })
  authenticator?: boolean;

  @ApiProperty({ example: 1, required: false })
  role_id?: number;

  @ApiProperty()
  created_at?: Date;

  @ApiProperty()
  updated_at?: Date;

  @ApiProperty()
  deleted_at?: Date;
}

export class UserFilter implements UserEntityInterface {
  @ApiProperty({ example: 'User', required: false })
  name?: string;

  @ApiProperty({ example: 'user@email.com', required: false })
  email?: string;

  @ApiProperty({ example: Gender.MALE, required: false })
  gender?: Gender;

  @ApiProperty({ example: 'Bogor', required: false })
  birth_place?: string;

  @ApiProperty({ example: new Date().toLocaleDateString(), required: false })
  birth_date?: string;

  @ApiProperty({ example: '089606415122', required: false })
  phone?: string;

  @ApiProperty({ example: true, required: false })
  authenticator?: boolean;

  @ApiProperty({ example: 1, required: false })
  role_id?: number;
}

export class UserNotFoundResponse {
  @ApiProperty({ example: 404 })
  statusCode: number;

  @ApiProperty({ example: 'User does not exists' })
  message: string;

  @ApiProperty({ example: 'Not Found' })
  error: string;
}
