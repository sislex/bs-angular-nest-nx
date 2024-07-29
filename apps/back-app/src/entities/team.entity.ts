import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teams')
export class Teams {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  description?: string;

  @Column()
  photo?: string;

  @Column()
  free?: number;
}
