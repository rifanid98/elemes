import { Role } from 'infrastructure/persistence/local/typeorm/entity';

export interface RoleRepository {
  getAllRoles(): Promise<Role[]>;

  getOneRole(role: Role): Promise<Role>;

  getRoleById(role: Role): Promise<Role>;

  createRole(role: Role): Promise<Role>;

  updateRole(role: Role): Promise<boolean>;

  deleteRole(role: Role): Promise<boolean>;
}
