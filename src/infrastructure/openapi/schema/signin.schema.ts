import { UserEntityInterface } from 'domain/entity/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class SigninRequestBody implements UserEntityInterface {
  @ApiProperty({ example: 'user@email.com' })
  email: string;

  @ApiProperty({ example: 'P@ssword' })
  password: string;
}

export class SigninResponseBody {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJhZG5pbi5yaWZhbmRpQG5hc2h0YS5pZCIsImF1dGhlbnRpY2F0b3IiOmZhbHNlLCJpYXQiOjE2MzYwMjA3ODUsImV4cCI6MTYzNjAyNDM4NX0.Bwt98abJDlw79UdLGt38twSsXkEZfF69mfS_cgQcvbk',
  })
  token: string;
}

export class SigninNotFoundResponseBody {
  @ApiProperty({ example: 404 })
  statusCode: number;

  @ApiProperty({ example: 'User not found' })
  message: string;

  @ApiProperty({ example: 'Not Found' })
  error: string;
}
