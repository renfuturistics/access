import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class tbl_TiltCodes {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  Institution: String;
  @Column()
  TiltCode: String;
}
