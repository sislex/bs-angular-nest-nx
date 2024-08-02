import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('technologies')
export class Technologies {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 255 })
  name?: string;

  @Column({ type: 'text' })
  description?: string;

  @Column({ type: 'text' })
  photo?: string;
}
