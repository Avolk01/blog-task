import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EApiTags } from 'src/utils/enums/api-tags.enum';
import { ERoutes } from 'src/utils/enums/routes.enum';
import { Author } from './entities/author.entity';
import { CreateAuthorInputDto } from './dto/create-author.input.dto';
import { CreateAuthorResponseDto } from './dto/create-author.response.dto';
import { UpdateAuthorInputDto } from './dto/update-author.input.dto';


@Controller(ERoutes.AUTHORS)
@ApiTags(EApiTags.AUTHORS)
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService) { }

    @Post()
    @ApiOkResponse({ type: CreateAuthorResponseDto, status: HttpStatus.CREATED })
    async createCategory(@Body() dto: CreateAuthorInputDto): Promise<Author> {
        return await this.authorsService.createAuthor({ ...dto });
    }

    @Get()
    @ApiOkResponse({ type: CreateAuthorResponseDto, status: HttpStatus.OK })
    async getCategoryById(@Query('categoryId') id: string): Promise<Author> {
        return await this.authorsService.getAuthorById({ id });
    }

    @Get('all')
    @ApiOkResponse({ type: CreateAuthorResponseDto, status: HttpStatus.OK, isArray: true })
    async getAllTags(): Promise<Author[]> {
        return await this.authorsService.getAllAuthors();
    }

    @Put()
    @ApiOkResponse({ type: CreateAuthorResponseDto, status: HttpStatus.OK })
    async updateCategory(@Body() dto: UpdateAuthorInputDto): Promise<Author> {
        return await this.authorsService.updateAuthor({ ...dto });
    }

    @Delete()
    @ApiOkResponse({ status: HttpStatus.OK })
    async deleteCategory(@Query('categoryId') id: string): Promise<void> {
        await this.authorsService.deleteAuthor({ id });
    }
}
