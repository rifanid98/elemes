import { IsNotEmpty, IsOptional, Min } from 'class-validator';
import { Course, CourseEntityInterface } from 'domain/entity/course.entity';

export class CourseDto implements Course {
  @IsOptional()
  @Min(1)
  id?: number;

  @IsNotEmpty()
  name?: string;

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

export class CourseFilterDto implements CourseEntityInterface {
  @IsOptional()
  name?: string;

  @IsOptional()
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
