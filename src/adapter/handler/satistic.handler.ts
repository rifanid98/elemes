import { Controller, Get, Inject, UseFilters } from '@nestjs/common';
import {
  Statistic,
  StatisticUsecase,
} from 'usecase/statistic/statistic.usecase';
import { QueryExceptionFilter } from 'sharedkernel/nest/exception-filter';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { StatisticResponseBody } from 'src/infrastructure/openapi/schema';

@Controller('statistics')
@ApiTags('Statistic')
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
