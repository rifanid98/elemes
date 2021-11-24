import { forwardRef, INestApplication, NestInterceptor } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { MainModule } from 'di/module';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createTestModule = (interceptor: NestInterceptor) => {
  return Test.createTestingModule({
    imports: [forwardRef(() => MainModule)],
    providers: [
      {
        provide: 'APP_INTERCEPTOR',
        useValue: interceptor,
      },
    ],
  }).compile();
};

describe('Interceptors', () => {
  // https://github.com/nestjs/nest/blob/master/integration/hello-world/e2e/interceptors.spec.ts
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let app: INestApplication;

  test.todo('should map response');

  // it('should map response', async () => {
  //   const module = await createTestModule(new TransformInterceptor());
  //   app = module.createNestApplication();
  //
  //   await app.init();
  //   return request(app.getHttpServer())
  //     .get('/hello/stream')
  //     .expect(200, { data: 'Hello world!' });
  // });
});
