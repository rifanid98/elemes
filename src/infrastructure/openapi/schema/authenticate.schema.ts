import { ApiProperty } from '@nestjs/swagger';

export class AuthenticateUnauthorizedResponseBody {
  @ApiProperty({ example: 401 })
  statusCode: number;

  @ApiProperty({ example: 'Authenticator code is invalid' })
  message: string;

  @ApiProperty({ example: 'Unauthorized' })
  error: string;
}

export class AuthenticateRequestBody {
  @ApiProperty({
    example: '457389',
  })
  authenticator_code: string;
}

export class AuthenticateResponseBody {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJhZG5pbi5yaWZhbmRpQG5hc2h0YS5pZCIsImF1dGhlbnRpY2F0b3IiOnRydWUsImlhdCI6MTYzNjAzODYwNCwiZXhwIjoxNjM2MDQyMjA0fQ.vOHzdRiCRSKtZ48GW5GmxVcBzvH6GaSFog14z4f7JR4',
  })
  token: string;
}
