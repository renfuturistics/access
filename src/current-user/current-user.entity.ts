import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tbl_CurrentUser {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  FullNames: string;
}
