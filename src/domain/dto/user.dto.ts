import {
  IsDate,
  IsEmail,
  IsEnum,
  IsOptional,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Gender, User } from 'domain/entity/user.entity';

export class UserDto implements User {
  id?: number;

  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Passwords should contain at least 1 upper case letter|' +
      'Passwords should contain at least 1 lower case letter|' +
      'Passwords should contain at least 1 number or special character',
  })
  password?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  birth_place?: string;

  @IsOptional()
  birth_date?: string;

  @IsOptional()
  @MinLength(10)
  @MaxLength(15)
  phone?: string;

  @IsOptional()
  authenticator?: boolean;
}

export class UserFilterDto implements User {
  id?: number;

  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  birth_place?: string;

  @IsOptional()
  @IsDate()
  birth_date?: string;

  @IsOptional()
  @MinLength(10)
  @MaxLength(15)
  phone?: string;

  @IsOptional()
  authenticator?: boolean;
}
