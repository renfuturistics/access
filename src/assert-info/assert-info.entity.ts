import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tbl_AssertInfo {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  EnteredBy: string;

  @Column({ type: 'date' })
  EntryDate: Date;

  @Column({ type: 'enum', enum: ['Active', 'Inactive'] })
  Status: 'Active' | 'Inactive';

  @Column()
  CarOwnerNRC: string;

  @Column({ nullable: true })
  Cashintype?: string;

  @Column({ nullable: true })
  AssertRegNumber?: string;

  @Column({ nullable: true })
  AssertMake?: string;

  @Column({ nullable: true })
  AssertModel?: string;

  @Column({ nullable: true })
  ChassisNumber?: string;

  @Column({ nullable: true })
  EngineNumber?: string;

  @Column({ nullable: true })
  Colour?: string;

  @Column({ nullable: true })
  YearMake?: string;

  @Column({ type: 'date', nullable: true })
  RoadTaxExpiry?: Date;

  @Column({ type: 'date', nullable: true })
  FitnessExpiry?: Date;

  @Column({ nullable: true })
  InsuranceType?: string;

  @Column({ nullable: true })
  InsuranceName?: string;

  @Column({ type: 'date', nullable: true })
  InsuranceExpiry?: Date;

  @Column({ type: 'date', nullable: true })
  NextPayDate?: Date;

  @Column({ type: 'float', nullable: true })
  ProjectedPay?: number;

  @Column({ type: 'date', nullable: true })
  NextServiceDate?: Date;

  @Column({ type: 'date', nullable: true })
  NextCarCheck?: Date;

  @Column({ nullable: true })
  WhiteBookDoc?: string;

  @Column({ nullable: true })
  InsuranceDoc?: string;

  @Column({ nullable: true })
  ContractDoc?: string;

  @Column({ nullable: true })
  CarOwnerName?: string;

  @Column({ nullable: true })
  DetailVehicleInfo?: string;

  @Column({ nullable: true })
  FullVehInfo?: string;

  @Column({ nullable: true })
  VehicleInfo?: string;
}
