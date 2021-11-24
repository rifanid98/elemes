import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import { CourseUsecase } from 'usecase/course/course.usecase';
import { QueryExceptionFilter } from 'sharedkernel/nest/exception-filter';
import {
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Course } from 'domain/entity/course.entity';
import {
  CourseConflictResponseBody,
  CourseFilter,
  CourseNotFoundResponse,
  CourseRequestBody,
  CourseResponseBody,
} from 'infrastructure/openapi/schema';
import { CourseDto, CourseFilterDto } from 'domain/dto/course.dto';

@Controller('courses')
@ApiTags('Courses')
export class CourseHandler {
  constructor(@Inject('CourseUsecase') private useCase: CourseUsecase) {}

  @Post('/')
  @UseFilters(QueryExceptionFilter)
  @ApiOperation({ summary: 'Add new course' })
  @ApiBody({ type: CourseRequestBody })
  @ApiCreatedResponse({
    type: CourseResponseBody,
    description: 'Course created',
  })
  @ApiConflictResponse({
    type: CourseConflictResponseBody,
    description: 'Course already exists',
  })
  createCourse(@Body() course: CourseDto): Promise<Course> {
    return this.useCase.createCourse(course);
  }

  @Get('/')
  @UseFilters(QueryExceptionFilter)
  @ApiOperation({ summary: 'Get all courses' })
  @ApiQuery({ type: CourseFilter })
  @ApiOkResponse({
    type: [CourseResponseBody],
    description: 'Returns Course entity',
  })
  getAllCourses(@Query() course?: CourseFilterDto): Promise<Course[]> {
    return this.useCase.getAllCourses(course);
  }

  @Get('/:id')
  @UseFilters(QueryExceptionFilter)
  @ApiOperation({ summary: 'Get course detail' })
  @ApiOkResponse({
    type: CourseResponseBody,
    description: 'Returns Course entity',
  })
  @ApiNotFoundResponse({
    type: CourseNotFoundResponse,
    description: 'Course does not exists',
  })
  getCourseById(@Param('id', ParseIntPipe) id: number): Promise<Course> {
    const course = new Course();
    course.id = id;
    return this.useCase.getCourseById(course);
  }

  @Patch('/:id')
  @UseFilters(QueryExceptionFilter)
  @ApiOperation({ summary: 'Update course' })
  @ApiBody({ type: CourseRequestBody })
  @ApiOkResponse({
    description: 'Course updated',
  })
  @ApiConflictResponse({
    type: CourseConflictResponseBody,
    description: 'Course already exists',
  })
  @ApiNotFoundResponse({
    type: CourseNotFoundResponse,
    description: 'Course does not exists',
  })
  updateCourse(
    @Param('id', ParseIntPipe) id: number,
    @Body() course: CourseDto,
  ): Promise<boolean> {
    course.id = id;
    return this.useCase.updateCourse(course);
  }

  @Delete('/:id')
  @UseFilters(QueryExceptionFilter)
  @ApiOperation({ summary: 'Delete course' })
  @ApiOkResponse({
    description: 'Course deleted',
  })
  @ApiNotFoundResponse({
    type: CourseNotFoundResponse,
    description: 'Course does not exists',
  })
  deleteCourse(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    const course = new Course();
    course.id = id;
    return this.useCase.deleteCourse(course);
  }
}
