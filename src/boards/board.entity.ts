import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import type { BoardStatus } from './board.model';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
