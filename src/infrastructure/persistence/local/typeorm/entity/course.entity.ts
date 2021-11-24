import { CourseEntityInterface } from 'domain/entity/course.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Course implements CourseEntityInterface {
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
    length: '50',
    nullable: true,
  })
  category?: string;

  @Column({
    type: 'varchar',
    length: '100',
    nullable: true,
  })
  description?: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  rating?: number;

  @Column({
    type: 'int',
    nullable: true,
  })
  bought?: number;

  @Column({
    type: 'int',
    nullable: true,
  })
  price?: number;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
