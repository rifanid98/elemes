import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { map } from 'rxjs/operators';

// import FastifyMulter from 'fastify-multer';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    return next.handle().pipe(map((data) => classToPlain(data)));
  }
}

/**
 * Enable this and use this at UseIntercetor() decorator
 * if you considering to use fastify adapter instead of
 * express adapter.
 *
 * Note:
 * Install needed dependencies first befor using this interceptor
 */

// type MulterInstance = any;
//
// export function FastifyFileInterceptor(
//   fieldName: string,
//   localOptions: Options,
// ): Type<NestInterceptor> {
//   class MixinInterceptor implements NestInterceptor {
//     protected multer: MulterInstance;
//
//     constructor(
//       @Optional()
//       @Inject('MULTER_MODULE_OPTIONS')
//       options: Multer,
//     ) {
//       this.multer = (FastifyMulter as any)({ ...options, ...localOptions });
//     }
//
//     async intercept(
//       context: ExecutionContext,
//       next: CallHandler,
//     ): Promise<Observable<any>> {
//       const ctx = context.switchToHttp();
//
//       await new Promise<void>((resolve, reject) =>
//         this.multer.single(fieldName)(
//           ctx.getRequest(),
//           ctx.getResponse(),
//           (error: any) => {
//             if (error) {
//               return reject(error);
//             }
//             resolve();
//           },
//         ),
//       );
//
//       return next.handle();
//     }
//   }
//
//   const Interceptor = mixin(MixinInterceptor);
//   return Interceptor as Type<NestInterceptor>;
// }
