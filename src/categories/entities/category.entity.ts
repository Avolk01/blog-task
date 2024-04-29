import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'blog_task' })
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}
