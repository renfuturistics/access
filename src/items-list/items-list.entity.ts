import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tbl_ItemsList {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  VColour: string;
  @Column()
  VMake: string;
  @Column()
  VModel: string;
}
