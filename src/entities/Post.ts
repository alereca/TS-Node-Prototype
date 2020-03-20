import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  imageUrl: string;

  @Column()
  content: string;

  constructor(params: { title: string; imageUrl: string; content: string }) {
    this.id = 0;
    this.title = params.title;
    this.imageUrl = params.imageUrl;
    this.content = params.content;
  }
}
