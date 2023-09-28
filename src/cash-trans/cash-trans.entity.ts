import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CashTrans {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ type: 'date' })
  EntryDate: Date;

  @Column()
  EnteredBy: string;

  @Column({ type: 'date' })
  TransDate: Date;

  @Column()
  CarReg: string;

  @Column()
  Driver: string;

  @Column()
  DriverDay: string;

  @Column('double')
  CashinObligation: number;

  @Column('double')
  CashReceived: number;

  @Column('double')
  BonusReceived: number;

  @Column('double')
  DriverLoan: number;

  @Column()
  DriverLoanNote: string;

  @Column('double')
  CashinDeficit: number;

  @Column()
  CashinNote: string;

  @Column('double')
  OwnerShare: number;

  @Column()
  OwnerShareNote: string;

  @Column('double')
  OwnerPayout: number;

  @Column()
  OwnerPayoutNote: string;

  @Column()
  OwnerPayoutPOP: string;

  @Column('double')
  OwnerLoan: number;

  @Column()
  OwnerLoanNote: string;

  @Column()
  OwnerLoanPOP: string;

  @Column('double')
  OwnerPendingPayout: number;

  @Column('double')
  CompanyShare: number;

  @Column('double')
  CompanyPayout: number;

  @Column()
  CompanyPayoutNote: string;

  @Column()
  CompanyPayoutPOP: string;

  @Column('double')
  CompanyExpenses: number;

  @Column()
  CompanyExpensesNote: string;

  @Column()
  CompanyExpensesPOP: string;

  @Column()
  CarOwnerNRC: string;

  @Column()
  FundsStatus: string;

  @Column('double')
  Margin: number;

  @Column('double')
  TotalLoans: number;

  @Column('double')
  TotalCashin: number;

  @Column('double')
  PendingPayout: number;

  @Column('double')
  TotalPayout: number;

  @Column('double')
  TotalCashinObligation: number;

  @Column('double')
  CollectionRate: number;

  @Column('double')
  TotalPaidOut: number;

  @Column('double')
  CompanyPendingPayout: number;
}
