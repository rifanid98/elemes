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
import { UserUsecase } from 'usecase/user/user.usecase';
import { QueryExceptionFilter } from 'sharedkernel/nest/exception-filter';
import {
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'domain/entity/user.entity';
import {
  UserConflictResponseBody,
  UserNotFoundResponse,
  UserRequestBody,
  UserResponseBody,
} from 'infrastructure/openapi/schema';
import { UserDto, UserFilterDto } from 'domain/dto/user.dto';

@Controller('users')
@ApiTags('Users')
export class UserHandler {
  constructor(@Inject('UserUsecase') private useCase: UserUsecase) {}

  @Post('/')
  @UseFilters(QueryExceptionFilter)
  @ApiOperation({ summary: 'Add new user' })
  @ApiBody({ type: UserRequestBody })
  @ApiCreatedResponse({
    type: UserResponseBody,
    description: 'User created',
  })
  @ApiConflictResponse({
    type: UserConflictResponseBody,
    description: 'User already exists',
  })
  createUser(@Body() user: UserDto): Promise<User> {
    return this.useCase.createUser(user);
  }

  // @ApiQuery({ type: UserFilter })
  @Get('/')
  @UseFilters(QueryExceptionFilter)
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({
    type: [UserResponseBody],
    description: 'Returns User entity',
  })
  getAllUsers(@Query() user?: UserFilterDto): Promise<User[]> {
    return this.useCase.getAllUsers(user);
  }

  @Get('/:id')
  @UseFilters(QueryExceptionFilter)
  @ApiOperation({ summary: 'Get user detail' })
  @ApiOkResponse({
    type: UserResponseBody,
    description: 'Returns User entity',
  })
  @ApiNotFoundResponse({
    type: UserNotFoundResponse,
    description: 'User does not exists',
  })
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = new User();
    user.id = id;
    return this.useCase.getUserById(user);
  }

  @Patch('/:id')
  @UseFilters(QueryExceptionFilter)
  @ApiOperation({ summary: 'Update user' })
  @ApiBody({ type: UserRequestBody })
  @ApiOkResponse({
    description: 'User updated',
  })
  @ApiConflictResponse({
    type: UserConflictResponseBody,
    description: 'User already exists',
  })
  @ApiNotFoundResponse({
    type: UserNotFoundResponse,
    description: 'User does not exists',
  })
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UserDto,
  ): Promise<boolean> {
    user.id = id;
    return this.useCase.updateUser(user);
  }

  @Delete('/:id')
  @UseFilters(QueryExceptionFilter)
  @ApiOperation({ summary: 'Delete user' })
  @ApiOkResponse({
    description: 'User deleted',
  })
  @ApiNotFoundResponse({
    type: UserNotFoundResponse,
    description: 'User does not exists',
  })
  deleteUser(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    const user = new User();
    user.id = id;
    return this.useCase.deleteUser(user);
  }
}
