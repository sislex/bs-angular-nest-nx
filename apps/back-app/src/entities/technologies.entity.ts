import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('technologies')
export class Technologies {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  description?: string;

  @Column()
  photo?: string;
}
