import { UserEntityInterface } from 'domain/entity/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class SignupRequestBody implements UserEntityInterface {
  @ApiProperty({ example: 'user@email.com' })
  email: string;

  @ApiProperty({ example: 'P@ssword' })
  password: string;
}

export class SignupResponseBody implements UserEntityInterface {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: false })
  authenticator: boolean;

  @ApiProperty({ example: 'user@email.com' })
  email: string;
}

export class SignupConflictResponseBody {
  @ApiProperty({ example: 409 })
  statusCode: number;

  @ApiProperty({ example: 'Data already exists' })
  message: string;

  @ApiProperty({ example: 'Conflict' })
  error: string;
}
