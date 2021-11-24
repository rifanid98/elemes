import { Test } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';
import { ConfigModuleConfig } from 'di/config';
import {
  AuthServiceLocalMongodbRepository,
  AuthServiceLocalMongodbRepositoryInterface,
} from 'src/infrastructure/persistence/local/mongodb/repository/auth-service.mongodb.repository.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AuthService,
  AuthServiceSchema,
  AuthServiceSchemaInterface,
} from 'src/infrastructure/persistence/local/mongodb/schema/auth.schema';

describe('AuthServiceLocalMondodbRepository', () => {
  let authServiceRepository: AuthServiceLocalMongodbRepositoryInterface;

  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(ConfigModuleConfig),
        MongooseModule.forRoot('mongodb://localhost/portal_nashtanet_test'),
        MongooseModule.forFeature([
          { name: AuthService.name, schema: AuthServiceSchema },
        ]),
      ],
      providers: [
        {
          provide: 'AuthServiceLocalMongodbRepositoryInterface',
          useClass: AuthServiceLocalMongodbRepository,
        },
      ],
    }).compile();

    authServiceRepository = await module.get(
      'AuthServiceLocalMongodbRepositoryInterface',
    );

    app = module.createNestApplication();
    await app.init();
  });

  describe('create', () => {
    it('should save one document', async () => {
      const document: AuthServiceSchemaInterface = {
        message: 'message',
        stack: { key: 'value' },
        meta: { key: 'value' },
      };
      const result = await authServiceRepository.create(document);
      expect(typeof result).toBe('object');
      const plainResult = JSON.parse(JSON.stringify(result));
      delete plainResult._id;
      delete plainResult.__v;
      expect(plainResult).toEqual(document);
    });
  });
});
