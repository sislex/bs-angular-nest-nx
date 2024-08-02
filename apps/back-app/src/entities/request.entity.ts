import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('requests')
export class Requests {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 255 })
  email?: string;

  @Column({ type: 'varchar', length: 255 })
  name?: string;

  @Column({ type: 'text' })
  message?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp?: Date;

  @Column({ type: 'tinyint', default: 0})
  processed?: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  timestampProcessed?: Date;
}
