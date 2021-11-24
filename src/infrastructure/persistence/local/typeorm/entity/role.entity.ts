import { RoleEntityInterface } from 'domain/entity/role.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/infrastructure/persistence/local/typeorm/entity/user.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Role implements RoleEntityInterface {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({
    type: 'varchar',
    length: '50',
    nullable: true,
  })
  name?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @OneToMany(() => User, (user) => user.role)
  @Exclude({ toPlainOnly: true })
  users: User[];
}
