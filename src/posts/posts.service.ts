import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
    ) { }

    public async createPost({ title, content, author, tags, categories }:
        { title: string; content: string; author: string; tags: string[]; categories: string[] }): Promise<Post> {
        // const post = this.postRepository.create({  content, title, author, [tags], [categories] });

        // return this.postRepository.save(post);
        return null;
    }

    public async getAllPosts(): Promise<Post[]> {
        return this.postRepository.find();
    }

    public async getPostById({ id }: { id: string }): Promise<Post> {
        return this.postRepository.findOne({ where: { id } });
    }

    public async updatePost({ id, title, content, author, tags, categories }:
        { id: string; title: string; content: string; author: string; tags: string[]; categories: string[] }): Promise<Post> {
        // const data = { id, name };

        // return this.postRepository.save(data);
        return null;
    }

    public async deletePost({ id }: { id: string }): Promise<void> {
        await this.postRepository.delete({ id });
    }
}
