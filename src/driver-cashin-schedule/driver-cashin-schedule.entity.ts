import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class tbl_DriverCashinSchedule {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ type: 'int' })
  DayNumber: number;

  // Branded Comfort
  @Column()
  BrandedComfort: string;

  @Column()
  BrandedComfortOwner: string;

  @Column()
  BrandedComfortNotes: string;

  // Unbranded Comfort
  @Column()
  UnbrandedComfort: string;

  @Column()
  UnbrandedComfortOwner: string;

  @Column()
  UnbrandedComfortNotes: string;

  // Branded Economy
  @Column()
  BrandedEconomy: string;

  @Column()
  BrandedEconomyOwner: string;

  @Column()
  BrandedEconomyNotes: string;

  // Unbranded Economy
  @Column()
  UnbrandedEconomy: string;

  @Column()
  UnbrandedEconomyOwner: string;

  @Column()
  UnbrandedEconomyNotes: string;

  // Oscar Special
  @Column()
  OscarSpecial: string;

  @Column()
  OscarSpecialOwner: string;

  @Column()
  OscarSpecialNotes: string;

  // Muke Special
  @Column()
  MukeSpecial: string;

  @Column()
  MukeSpecialOwner: string;

  @Column()
  MukeSpecialNotes: string;
}
