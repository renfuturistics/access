import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class tbl_AssertOwnerInfo {
  @PrimaryGeneratedColumn()
  ID: string;

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

  @Column({ type: 'date' })
  SignUpDate: Date;

  @Column()
  PaymentMethod: string;

  @Column()
  TiltCode: string;

  @Column()
  AccountNumber: string;

  @Column()
  AltPaymentMethod: string;

  @Column()
  AltTiltCode: string;

  @Column()
  AltAccountNumber: string;

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
  OwnerDoc: string;
}
