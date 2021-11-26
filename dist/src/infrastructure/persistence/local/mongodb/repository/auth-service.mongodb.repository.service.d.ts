import { AuthServiceDocument, AuthServiceSchemaInterface } from 'infrastructure/persistence/local/mongodb/schema/auth.schema';
import { Model } from 'mongoose';
export interface AuthServiceLocalMongodbRepositoryInterface {
    create(authServiceSchema: AuthServiceSchemaInterface): Promise<AuthServiceDocument>;
}
export declare class AuthServiceLocalMongodbRepository implements AuthServiceLocalMongodbRepositoryInterface {
    private authServiceModel;
    constructor(authServiceModel: Model<AuthServiceDocument>);
    create(authServiceSchema: AuthServiceSchemaInterface): Promise<AuthServiceDocument>;
}
