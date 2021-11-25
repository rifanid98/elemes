import { IsEnum, IsOptional, Min } from 'class-validator';
import { Course, CourseEntityInterface } from 'domain/entity/course.entity';
import { Transform } from 'class-transformer';

export class CourseDto implements Course {
  @IsOptional()
  @Min(1)
  id?: number;

  @IsOptional()
  name?: string;

  @IsOptional()
  category?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  @Min(0)
  rating?: number;

  @IsOptional()
  @Min(0)
  @Transform(({ value }) => Number.parseInt(value))
  bought?: number;

  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  price?: number;

  image?: string;

  file?: Express.Multer.File;
}

export enum PriceLevel {
  HIGHEST = 'highest',
  LOWEST = 'lowest',
  FREE = 'free',
}

export class CourseFilterDto implements CourseEntityInterface {
  @IsOptional()
  name?: string;

  @IsOptional()
  category?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  rating?: number;

  @IsOptional()
  bought?: number;

  @IsOptional()
  price?: number;

  @IsOptional()
  @IsEnum(PriceLevel)
  price_level: PriceLevel;
}
