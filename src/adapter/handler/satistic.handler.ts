import { Controller, Get, Inject, UseFilters, UseGuards } from '@nestjs/common';
import {
  Statistic,
  StatisticUsecase,
} from 'usecase/statistic/statistic.usecase';
import { QueryExceptionFilter } from 'sharedkernel/nest/exception-filter';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { StatisticResponseBody } from 'infrastructure/openapi/schema';
import { AuthGuard } from '@nestjs/passport';
import { Role, Roles } from 'sharedkernel/nest/decorator';
import { RolesGuard } from 'sharedkernel/nest/guard';

@Controller('statistics')
@ApiTags('Statistic')
@ApiBearerAuth('Authorization')
export class StatisticHandler {
  constructor(@Inject('StatisticUsecase') private useCase: StatisticUsecase) {}

  @Get('/')
  @Roles(Role.Admin, Role.SuperAdmin)
  @UseGuards(RolesGuard)
  @UseFilters(QueryExceptionFilter)
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get statistics' })
  @ApiOkResponse({
    type: StatisticResponseBody,
    description: 'Returns Statistic entity',
  })
  getStatistics(): Promise<Statistic> {
    return this.useCase.getStatistic();
  }
}
