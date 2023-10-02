import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sheet {
  @PrimaryGeneratedColumn()
  ID: string;
  @Column({ type: 'date' })
  DateOfEntry: Date;
  @Column()
  EnteredBy: string;
  @Column({ type: 'date' })
  Date: Date;
  @Column()
  DriversName: string;
  @Column()
  NRC: string;
  @Column()
  TotalHours: number;
  @Column()
  TotalMinutes: number;
  @Column()
  Rides: number;
  @Column()
  CashCollected: number;
  @Column()
  Mileage: number;
  @Column()
  StartHour: number;
  @Column()
  Report: string;
  @Column()
  Recommendations: string;
}
