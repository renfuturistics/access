import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class tbl_CashinSchedule {
  @PrimaryGeneratedColumn()
  ID: string;
  @Column()
  CashinTitle: string;
  @Column()
  DayNumber: number;
  @Column()
  DriverObligation: number;
  @Column()
  CarOwnerShare: number;
  @Column()
  CashinNote?: string;
}
