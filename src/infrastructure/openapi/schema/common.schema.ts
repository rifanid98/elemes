import { ApiProperty } from '@nestjs/swagger';

export class UnauthorizedResponseBody {
  @ApiProperty({ example: 401 })
  statusCode: number;

  @ApiProperty({ example: 'Unauthorized' })
  message: string;
}
