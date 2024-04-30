import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostResponseDto } from './dto/create-post.response.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostInputDto } from './dto/create-post.input.dto';
import { Post as TPost } from './entities/post.entity';
import { UpdatePostInputDto } from './dto/update-post.input.dto';
import { ERoutes } from 'src/utils/enums/routes.enum';
import { EApiTags } from 'src/utils/enums/api-tags.enum';

@Controller(ERoutes.POSTS)
@ApiTags(EApiTags.POSTS)
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
