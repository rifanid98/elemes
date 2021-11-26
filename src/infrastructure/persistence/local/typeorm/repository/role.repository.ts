import { EntityRepository, Repository } from 'typeorm';
import { Role } from '../entity/role.entity';
import { RoleRepository } from 'src/domain/repository/role.repository';

@EntityRepository(Role)
export class RoleLocalRepository
  extends Repository<Role>
  implements RoleRepository
{
  createRole(role: Role): Promise<Role> {
    return this.save(role);
  }

  getAllRoles(): Promise<Role[]> {
    return this.find();
  }

  async getOneRole(role: Role): Promise<Role> {
    return this.findOne(role);
  }

  getRoleById(role: Role): Promise<Role> {
    return this.findOne(role.id);
  }

  async updateRole(role: Role): Promise<boolean> {
    const result = await this.update(role.id, role);
    return result.affected > 0;
  }

  async deleteRole(role: Role): Promise<boolean> {
    const result = await this.softDelete(role.id);
    return result.affected > 0;
  }
}
