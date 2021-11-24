import { ApiProperty } from '@nestjs/swagger';
import { CourseEntityInterface } from 'domain/entity/course.entity';
import { PriceLevel } from 'src/domain/dto/course.dto';

export class CourseConflictResponseBody {
  @ApiProperty({ example: 409 })
  statusCode: number;

  @ApiProperty({ example: 'Data already exists' })
  message: string;

  @ApiProperty({ example: 'Conflict' })
  error: string;
}

export class CourseRequestBody implements CourseEntityInterface {
  @ApiProperty({ example: 'NestJs From Zero To Hero' })
  name?: string;

  @ApiProperty({ example: 'programming' })
  category?: string;

  @ApiProperty({ example: 'Learning nest.js from scrath' })
  description?: string;

  @ApiProperty({ example: 0 })
  rating?: number;

  @ApiProperty({ example: 0 })
  bought?: number;

  @ApiProperty({ example: 50000 })
  price?: number;
}

export class CourseResponseBody implements CourseEntityInterface {
  @ApiProperty({ example: 1 })
  id?: number;

  @ApiProperty({ example: 'NestJs From Zero To Hero' })
  name?: string;

  @ApiProperty({ example: 'programming' })
  category?: string;

  @ApiProperty({ example: 'Learning nest.js from scrath' })
  description?: string;

  @ApiProperty({ example: 1 })
  rating?: number;
  @ApiProperty({ example: 1 })
  bought?: number;

  @ApiProperty({ example: 1 })
  price?: number;

  @ApiProperty({ example: 'programming.png', required: false })
  image?: string;

  @ApiProperty()
  created_at?: Date;

  @ApiProperty()
  updated_at?: Date;

  @ApiProperty()
  deleted_at?: Date;
}

export class CourseFilter implements CourseEntityInterface {
  @ApiProperty({ example: 'NestJs From Zero To Hero', required: false })
  name?: string;

  @ApiProperty({ example: 'programming', required: false })
  category?: string;

  @ApiProperty({ example: 'Learning nest.js from scrath', required: false })
  description?: string;

  @ApiProperty({ example: 0, required: false })
  rating?: number;

  @ApiProperty({ example: 0, required: false })
  bought?: number;

  @ApiProperty({ example: 50000, required: false })
  price?: number;

  @ApiProperty({
    example: PriceLevel.HIGHEST,
    enum: PriceLevel,
    required: false,
  })
  price_level: PriceLevel;
}

export class CourseNotFoundResponse {
  @ApiProperty({ example: 404 })
  statusCode: number;

  @ApiProperty({ example: 'Course does not exists' })
  message: string;

  @ApiProperty({ example: 'Not Found' })
  error: string;
}
