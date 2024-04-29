import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'blog_task' })
export class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}
