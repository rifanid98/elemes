import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';
import { configValidationSchema } from 'sharedkernel/schema';

export const ConfigModuleConfig: ConfigModuleOptions = {
  envFilePath: [`.env.stage.${process.env.STAGE}`],
  validationSchema: configValidationSchema,
};
