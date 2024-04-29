import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostResponseDto } from './dto/create-post.response.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateCategoryInputDto } from 'src/categories/dto/create-category.input.dto';
import { UpdateCategoryInputDto } from 'src/categories/dto/update-category.input.dto';
import { Category } from 'src/categories/entities/category.entity';
import { CreatePostInputDto } from './dto/create-post.input.dto';
import { Post as TPost } from './entities/post.entity';
import { UpdatePostInputDto } from './dto/update-post.input.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Post()
    @ApiOkResponse({ type: CreatePostResponseDto, status: HttpStatus.CREATED })
    async createCategory(@Body() dto: CreatePostInputDto): Promise<TPost> {
        return await this.postsService.createPost({ ...dto });
    }

    @Get()
    @ApiOkResponse({ type: CreatePostResponseDto, status: HttpStatus.OK })
    async getCategoryById(@Query('postId') id: string): Promise<TPost> {
        return await this.postsService.getPostById({ id });
    }

    @Get('all')
    @ApiOkResponse({ type: CreatePostResponseDto, status: HttpStatus.OK, isArray: true })
    async getAllTags(): Promise<TPost[]> {
        return await this.postsService.getAllPosts();
    }

    @Put()
    @ApiOkResponse({ type: CreatePostResponseDto, status: HttpStatus.OK })
    async updateCategory(@Body() dto: UpdatePostInputDto): Promise<TPost> {
        return await this.postsService.updatePost({ ...dto });
    }

    @Delete()
    @ApiOkResponse({ status: HttpStatus.OK })
    async deleteCategory(@Query('postId') id: string): Promise<void> {
        await this.postsService.deletePost({ id });
    }
}
