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
import { StatisticResponseBody } from 'src/infrastructure/openapi/schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('statistics')
@UseGuards(AuthGuard('jwt'))
@ApiTags('Statistic')
@ApiBearerAuth('Authorization')
export class StatisticHandler {
  constructor(@Inject('StatisticUsecase') private useCase: StatisticUsecase) {}

  @Get('/')
  @UseFilters(QueryExceptionFilter)
  @ApiOperation({ summary: 'Get statistics' })
  @ApiOkResponse({
    type: StatisticResponseBody,
    description: 'Returns Statistic entity',
  })
  getStatistics(): Promise<Statistic> {
    return this.useCase.getStatistic();
  }
}
