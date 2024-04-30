import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { AuthorsService } from 'src/authors/authors.service';
import { CategoriesService } from 'src/categories/categories.service';
import { TagsService } from 'src/tags/tags.service';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        private readonly authorService: AuthorsService,
        private readonly categoryService: CategoriesService,
        private readonly tagsService: TagsService,
    ) { }

    public async createPost({ title, content, author, tags, categories }:
        { title: string; content: string; author: string; tags: string[]; categories: string[] }): Promise<Post> {
        const savedAuthor = await this.authorService.getAuthorById({ id: author });

        const savedTags = await this.tagsService.getTagsByIds({ ids: tags })

        const savedCategories = await this.categoryService.getCategoriesByIds({ ids: categories })

        const post = this.postRepository.create({ content, title, author: savedAuthor, tags: savedTags, categories: savedCategories });

        return this.postRepository.save(post);
    }

    public async getAllPosts(): Promise<Post[]> {
        return this.postRepository
            .createQueryBuilder('post')
            .innerJoinAndSelect('post.tags', 'tags')
            .innerJoinAndSelect('post.categories', 'categories')
            .innerJoinAndSelect('post.author', 'author')
            .getMany();
    }

    public async getPostById({ id }: { id: string }): Promise<Post> {
        return this.postRepository
            .createQueryBuilder('post')
            .innerJoinAndSelect('post.tags', 'tags')
            .innerJoinAndSelect('post.categories', 'categories')
            .innerJoinAndSelect('post.author', 'author')
            .where('post.id = :id', { id })
            .getOne();
    }

    public async updatePost({ id, title, content, author, tags, categories }:
        { id: string; title?: string; content?: string; author?: string; tags?: string[]; categories?: string[] }): Promise<Post> {
        const data: Partial<Post> = { id, title, content };

        if (author) {
            const savedAuthor = await this.authorService.getAuthorById({ id: author });
            data.author = savedAuthor;
        }

        if (tags) {
            const savedTags = await this.tagsService.getTagsByIds({ ids: tags })
            data.tags = savedTags;
        }

        if (categories) {
            const savedCategories = await this.categoryService.getCategoriesByIds({ ids: categories })
            data.categories = savedCategories;
        }

        return this.postRepository.save(data);
    }

    public async deletePost({ id }: { id: string }): Promise<void> {
        await this.postRepository.delete({ id });
    }
}
