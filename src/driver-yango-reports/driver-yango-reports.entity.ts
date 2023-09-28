import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tbl_DriverYangoReports {
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
  WorkHours: number;
  @Column()
  WorkMinutes: number;
  @Column()
  Orders: number;
  @Column()
  CashCollected: number;
  @Column()
  Mileage: number;
  @Column()
  StartHour: number;
  @Column()
  Comment: string;
  @Column()
  RecAction: string;
}
