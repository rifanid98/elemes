import { ApiProperty } from '@nestjs/swagger';

export class StatisticResponseBody {
  @ApiProperty({ example: 10 })
  users: number;

  @ApiProperty({ example: 25 })
  paid_courses: number;

  @ApiProperty({ example: 2 })
  free_courses: number;
}
