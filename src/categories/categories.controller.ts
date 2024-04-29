import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query, Request, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ERoutes } from 'src/utils/enums/routes.enum';
import { EApiTags } from 'src/utils/enums/api-tags.enum';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryResponseDto } from './dto/cerate-category.response.dto';
import { CreateCategoryInputDto } from './dto/create-category.input.dto';
import { UpdateCategoryInputDto } from './dto/update-category.input.dto';

@Controller(ERoutes.COLORS)
@ApiTags(EApiTags.COLORS)
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    @Post()
    @ApiOkResponse({ type: CreateCategoryResponseDto, status: HttpStatus.CREATED })
    async createCategory(@Body() dto: CreateCategoryInputDto): Promise<Category> {
        return await this.categoriesService.createCategory({ ...dto });
    }

    @Get()
    @ApiOkResponse({ type: CreateCategoryResponseDto, status: HttpStatus.OK })
    async getCategoryById(@Query('categoryId') id: string): Promise<Category> {
        return await this.categoriesService.getCategoryById({ id });
    }

    @Get('all')
    @ApiOkResponse({ type: CreateCategoryResponseDto, status: HttpStatus.OK, isArray: true })
    async getAllTags(): Promise<Category[]> {
        return await this.categoriesService.getAllCategories();
    }

    @Put()
    @ApiOkResponse({ type: CreateCategoryResponseDto, status: HttpStatus.OK })
    async updateCategory(@Body() dto: UpdateCategoryInputDto): Promise<Category> {
        return await this.categoriesService.updateCategory({ ...dto });
    }

    @Delete()
    @ApiOkResponse({ status: HttpStatus.OK })
    async deleteCategory(@Query('categoryId') id: string): Promise<void> {
        await this.categoriesService.deleteCategory({ id });
    }
}
