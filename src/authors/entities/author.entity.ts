import { Post } from 'src/posts/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

    @OneToMany(() => Post, (post) => post.author, {
        cascade: true,
        eager: true,
    })
    posts: Post[];
}
