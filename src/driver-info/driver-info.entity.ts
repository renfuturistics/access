import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tbl_DriverInfo {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  EnteredBy: string;
  @Column({ type: 'date' })
  EntryDate: Date;
  @Column()
  Status: string;
  @Column()
  FirstName: string;
  @Column()
  Surname: string;
  @Column()
  FullNames: string;
  @Column()
  PhoneNumber: string;
  @Column()
  AltPhoneNumber: string;
  @Column()
  NRC: string;
  @Column()
  Address: string;
  @Column()
  HomePinLink: string;
  @Column({ type: 'date' })
  SignUpDate: Date;
  @Column()
  NoK_Names: string;
  @Column()
  NoK_Relationship: string;
  @Column()
  NoK_NRC: string;
  @Column()
  NoK_Number: string;
  @Column()
  NRCdoc: string;
  @Column()
  CVdoc: string;
  @Column()
  ContractsDoc: string;
}
