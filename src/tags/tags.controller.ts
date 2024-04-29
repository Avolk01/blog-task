import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { TagsService } from './tags.service';
import { Tag } from './entities/tag.entity';
import { CreateTagResponseDto } from './dto/tag.response.dto';
import { CreateTagInputDto } from './dto/create-tag.input.dto';
import { UpdateTagInputDto } from './dto/update-tag.input.dto';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) { }

    @Post()
    @ApiOkResponse({ type: CreateTagResponseDto, status: HttpStatus.CREATED })
    async createTag(@Body() dto: CreateTagInputDto): Promise<Tag> {
        return await this.tagsService.createTag({ ...dto });
    }

    @Get('all')
    @ApiOkResponse({ type: CreateTagResponseDto, status: HttpStatus.OK, isArray: true })
    async getAllTags(): Promise<Tag[]> {
        return await this.tagsService.getAllTags();
    }

    @Get()
    @ApiOkResponse({ type: CreateTagResponseDto, status: HttpStatus.OK })
    async getTagById(@Query('tagId') id: string): Promise<Tag> {
        return await this.tagsService.getTagById({ id });
    }

    @Put()
    @ApiOkResponse({ type: CreateTagResponseDto, status: HttpStatus.OK })
    async updateTag(@Body() dto: UpdateTagInputDto): Promise<Tag> {
        return await this.tagsService.updateTag({ ...dto });
    }

    @Delete()
    @ApiOkResponse({ status: HttpStatus.OK })
    async deleteTag(@Query('tagId') id: string): Promise<void> {
        await this.tagsService.deleteTag({ id });
    }
}
