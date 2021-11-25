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
  UploadedFile,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CourseUsecase } from 'usecase/course/course.usecase';
import { QueryExceptionFilter } from 'sharedkernel/nest/exception-filter';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiConsumes,
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
  CourseFileRequestBody,
  CourseFilter,
  CourseNotFoundResponse,
  CourseRequestBody,
  CourseResponseBody,
} from 'infrastructure/openapi/schema';
import { CourseDto, CourseFilterDto } from 'domain/dto/course.dto';
import { RolesGuard } from 'src/sharedkernel/nest/guard';
import { Role, Roles } from 'src/sharedkernel/nest/decorator';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageMulterOptions } from 'src/sharedkernel/nest/common-config';

@Controller('courses')
@UseGuards(AuthGuard('jwt'))
@UseFilters(QueryExceptionFilter)
@ApiTags('Courses')
@ApiBearerAuth('Authorization')
export class CourseHandler {
  constructor(@Inject('CourseUsecase') private useCase: CourseUsecase) {}

  @Get('/categories')
  @Roles(Role.Staff, Role.Admin, Role.SuperAdmin)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Get course categories' })
  @ApiOkResponse({
    description: 'Returns available categories',
  })
  getCourseCategories(): Promise<any[]> {
    return this.useCase.getCourseCategories();
  }

  @Get('/populars')
  @Roles(Role.Staff, Role.Admin, Role.SuperAdmin)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Get popular categories' })
  @ApiOkResponse({
    description: 'Returns most popular categories',
  })
  getPopularCategories(): Promise<any[]> {
    return this.useCase.getPopularCategories();
  }

  @Post('/')
  @Roles(Role.Admin, Role.SuperAdmin)
  @UseGuards(RolesGuard)
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
  @Roles(Role.Staff, Role.Admin, Role.SuperAdmin)
  @UseGuards(RolesGuard)
  @ApiQuery({ type: CourseFilter })
  @ApiOperation({ summary: 'Get all courses' })
  @ApiOkResponse({
    type: [CourseResponseBody],
    description: 'Returns Course entity',
  })
  getAllCourses(@Query() course?: CourseFilterDto): Promise<Course[]> {
    return this.useCase.getAllCourses(course);
  }

  @Get('/:id')
  @Roles(Role.Staff, Role.Admin, Role.SuperAdmin)
  @UseGuards(RolesGuard)
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
  @Roles(Role.Admin, Role.SuperAdmin)
  @UseGuards(RolesGuard)
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
    console.log(course);
    course.id = id;
    return this.useCase.updateCourse(course);
  }

  @Patch('/:id/image')
  @Roles(Role.Admin, Role.SuperAdmin)
  @UseGuards(RolesGuard)
  @UseInterceptors(FileInterceptor('file', imageMulterOptions))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CourseFileRequestBody })
  @ApiOperation({ summary: 'Update course image' })
  @ApiOkResponse({
    description: 'Course image updated',
  })
  @ApiNotFoundResponse({
    type: CourseNotFoundResponse,
    description: 'Course does not exists',
  })
  updateCourseImage(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<boolean> {
    const course = new CourseDto();
    course.id = id;
    course.file = file;
    return this.useCase.updateCourse(course);
  }

  @Delete('/:id')
  @Roles(Role.Admin, Role.SuperAdmin)
  @UseGuards(RolesGuard)
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
