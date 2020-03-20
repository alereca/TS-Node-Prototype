import { Entity, Column } from "typeorm";

@Entity()
export class Post{
    @Column()
    title: string;

    @Column()
    imageUrl: string;
    
    @Column()
    content: string;
}