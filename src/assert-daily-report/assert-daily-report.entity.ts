import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tbl_AssertDailyReports {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column({ type: 'date' })
  EntryDate: Date;
  @Column()
  EnteredBy: string;
  @Column({ type: 'date' })
  OpsDate: Date;
  @Column()
  CarReg: string;
  @Column()
  Driver: string;
  @Column()
  YangoHours: number;
  @Column()
  YangoMinutes: number;
  @Column()
  YangoOrders: number;
  @Column()
  YangoMileage: number;
  @Column({ type: 'date' })
  YangoStartWork: Date;
  @Column()
  YangoCashGen: number;
  @Column()
  GPSMileage: number;
  @Column()
  Recomendation: string;
  @Column({ type: 'date' })
  ActionDate: Date;
  @Column()
  ActionedBy: string;
  @Column()
  ActionTaken: string;
}
