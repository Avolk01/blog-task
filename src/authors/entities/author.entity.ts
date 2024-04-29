import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'blog_task' })
export class Author {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: "first_name" })
    firstName: string;

    @Column({ name: "last_name", nullable: true })
    lastName: string;

    @Column()
    nickname: string;
}
