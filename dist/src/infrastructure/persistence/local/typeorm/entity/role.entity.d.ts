import { RoleEntityInterface } from 'domain/entity/role.entity';
import { User } from 'src/infrastructure/persistence/local/typeorm/entity/user.entity';
export declare class Role implements RoleEntityInterface {
    id?: number;
    name?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    users: User[];
}
