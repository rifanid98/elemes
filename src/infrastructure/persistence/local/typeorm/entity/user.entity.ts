import { Gender, UserEntityInterface } from 'domain/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '.';

@Entity()
export class User implements UserEntityInterface {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({
    type: 'varchar',
    length: '50',
    nullable: true,
  })
  name?: string;

  @Column({
    type: 'varchar',
    length: '100',
    nullable: true,
    unique: true,
  })
  email?: string;

  @Column({
    type: 'varchar',
    length: '100',
    nullable: true,
  })
  password?: string;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: true,
  })
  gender?: Gender;

  @Column({
    type: 'varchar',
    length: '50',
    nullable: true,
  })
  birth_place?: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  birth_date?: string;

  @Column({
    type: 'varchar',
    length: '15',
    nullable: true,
  })
  phone?: string;

  @Column({ default: false })
  authenticator?: boolean;

  @Column({
    type: 'varchar',
    length: '100',
    nullable: true,
  })
  authenticator_secret?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @OneToOne(() => Role)
  @JoinColumn()
  role: Role;
}
