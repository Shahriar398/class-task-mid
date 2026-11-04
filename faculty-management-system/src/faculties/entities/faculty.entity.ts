import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('faculties')
export class Faculty {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  expertise: string;

  @Column({ name: 'no_of_publication', type: 'int' })
  noOfPublication: number;
}