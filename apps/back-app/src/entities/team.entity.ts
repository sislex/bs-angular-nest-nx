import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teams')
export class Teams {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 255 })
  name?: string;

  @Column({ type: 'text' })
  description?: string;

  @Column({ type: 'text' })
  photo?: string;

  @Column({ type: 'tinyint', default: 0})
  free?: number;
}
