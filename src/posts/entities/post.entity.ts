import { Author } from 'src/authors/entities/author.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'blog_task' })
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @ManyToMany(() => Tag, tag => tag.posts)
    @JoinTable()
    tags: Tag[];

    @ManyToMany(() => Category, category => category.posts)
    @JoinTable()
    categories: Category[];

    @ManyToOne(() => Author, (author) => author.posts, {
        orphanedRowAction: 'delete',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    author: Author;
}
