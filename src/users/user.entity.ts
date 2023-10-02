import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class tbl_Users {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  FirstName: string;
  @Column()
  Surname: string;
  @Column()
  Designation: string;
  @Column()
  Access: string;
  @Column()
  UserName: string;
  @Column({ length: 6 })
  Password: string;
}
