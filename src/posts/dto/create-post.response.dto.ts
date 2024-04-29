import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostResponseDto {
    @ApiProperty({ description: `Post's id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    id: string;

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
    authorId: string;

    @ApiProperty({ description: `Post categories ids`, example: `[some_random_postgres_id]` })
    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    categoriesIds: string[];

    @ApiProperty({ description: `Post tags ids`, example: `[some_random_postgres_id]` })
    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    tagsIds: string[];
}
