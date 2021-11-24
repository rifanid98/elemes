import { Injectable } from '@nestjs/common';
import {
  AuthService,
  AuthServiceDocument,
  AuthServiceSchemaInterface,
} from 'infrastructure/persistence/local/mongodb/schema/auth.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export interface AuthServiceLocalMongodbRepositoryInterface {
  create(
    authServiceSchema: AuthServiceSchemaInterface,
  ): Promise<AuthServiceDocument>;
}

@Injectable()
export class AuthServiceLocalMongodbRepository
  implements AuthServiceLocalMongodbRepositoryInterface
{
  constructor(
    @InjectModel(AuthService.name)
    private authServiceModel: Model<AuthServiceDocument>,
  ) {}

  create(
    authServiceSchema: AuthServiceSchemaInterface,
  ): Promise<AuthServiceDocument> {
    const authServiceDocument = new this.authServiceModel(authServiceSchema);
    return authServiceDocument.save();
  }
}
