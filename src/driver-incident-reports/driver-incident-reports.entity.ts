import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class tbl_DriverIncidentReports {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column({ type: 'date' })
  EntryDate: Date;
  @Column()
  EnteredBy: string;
  @Column({ type: 'date' })
  ReportDate: Date;
  @Column()
  Driver: string;
  @Column()
  Incident: string;
  @Column()
  Status: string;
  @Column()
  RecActionTaken: string;
  @Column()
  ActionTaken: string;
}
