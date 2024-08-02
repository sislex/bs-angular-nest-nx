import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('requests')
export class Requests {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  email?: string;

  @Column()
  name?: string;

  @Column()
  message?: string;

  @Column()
  timestamp?: number;

  @Column()
  processed?: number;
}
