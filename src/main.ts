import { NestFactory } from '@nestjs/core';
import { MainModule } from 'di/module/main.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './sharedkernel/nest/interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'reflect-metadata';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as helmet from 'helmet';

async function bootstrap() {
  const devStage = ['development', 'dev', 'local'];
  const stage: string = process.env.STAGE;
  const app = await NestFactory.create<NestExpressApplication>(MainModule);

  app.setGlobalPrefix(devStage.includes(stage) ? '' : 'api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.enableCors();
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [`'self'`],
          styleSrc: [`'self'`, `'unsafe-inline'`],
          imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
        },
      },
    }),
  );

  const swaggerBuilder = new DocumentBuilder()
    .setTitle('Elemes Admin API')
    .setDescription('Elemes Admin endpoints')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'Bearer',
        in: 'header',
        description: 'JsonWebToken',
      },
      'Authorization',
    )
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerBuilder);
  SwaggerModule.setup('docs', app, swaggerDocument);

  await app.listen(3000, '0.0.0.0');
}

bootstrap();
