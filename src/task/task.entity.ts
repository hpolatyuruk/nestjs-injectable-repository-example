import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Task {
  @ObjectIdColumn()
  _id: string;

  @Column()
  title: string;

  @Column()
  done: boolean;
}
