import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthSignUpDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Passwords should contain at least 1 upper case letter|' +
      'Passwords should contain at least 1 lower case letter|' +
      'Passwords should contain at least 1 number or special character',
  })
  password: string;
}

export class AuthSignInDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Passwords should contain at least 1 upper case letter|' +
      'Passwords should contain at least 1 lower case letter|' +
      'Passwords should contain at least 1 number or special character',
  })
  password: string;
}

export class AuthAuthenticateDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(6, 6)
  @IsString()
  authenticator_code: string;
}
