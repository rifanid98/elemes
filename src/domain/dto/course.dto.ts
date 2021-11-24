import { IsEnum, IsNotEmpty, IsOptional, Min } from 'class-validator';
import { Course, CourseEntityInterface } from 'domain/entity/course.entity';

export class CourseDto implements Course {
  @IsOptional()
  @Min(1)
  id?: number;

  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  category?: string;

  @IsNotEmpty()
  description?: string;

  @IsOptional()
  @Min(0)
  rating?: number;

  @IsOptional()
  @Min(0)
  bought?: number;

  @IsOptional()
  price?: number;
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
