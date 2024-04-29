import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostInputDto {
    @ApiProperty({ description: `Post's title`, example: `Title` })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ description: `Post's content`, example: `Content` })
    @IsNotEmpty()
    @IsString()
    content: string;

    @ApiProperty({ description: `Post author's id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    author: string;

    @ApiProperty({ description: `Post categories ids`, example: `[some_random_postgres_id]` })
    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    categories: string[];

    @ApiProperty({ description: `Post tags ids`, example: `[some_random_postgres_id]` })
    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    tags: string[];
}
