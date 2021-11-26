"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const main_module_1 = require("./di/module/main.module");
const common_1 = require("@nestjs/common");
const interceptor_1 = require("./sharedkernel/nest/interceptor");
const swagger_1 = require("@nestjs/swagger");
require("reflect-metadata");
const helmet = require("helmet");
async function bootstrap() {
    const devStage = ['development', 'dev', 'local'];
    const stage = process.env.STAGE;
    const app = await core_1.NestFactory.create(main_module_1.MainModule);
    app.setGlobalPrefix(devStage.includes(stage) ? '' : 'api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new interceptor_1.TransformInterceptor());
    app.enableCors();
    app.use(helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: [`'self'`],
                styleSrc: [`'self'`, `'unsafe-inline'`],
                imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
                scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
            },
        },
    }));
    const swaggerBuilder = new swagger_1.DocumentBuilder()
        .setTitle('Elemes Admin API')
        .setDescription('Elemes Admin endpoints')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'Bearer',
        in: 'header',
        description: 'JsonWebToken',
    }, 'Authorization')
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, swaggerBuilder);
    swagger_1.SwaggerModule.setup('docs', app, swaggerDocument);
    await app.listen(3000, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map