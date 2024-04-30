import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePostInputDto {
    @ApiProperty({ description: `Post's id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ description: `Post's title`, example: `Title` })
    @IsOptional()
    @IsString()
    title?: string;

    @ApiProperty({ description: `Post's content`, example: `Content` })
    @IsOptional()
    @IsString()
    content?: string;

    @ApiProperty({ description: `Post author's id`, example: `some_random_postgres_id` })
    @IsOptional()
    @IsString()
    author?: string;

    @ApiProperty({ description: `Post categories ids`, example: `[some_random_postgres_id]` })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    categories?: string[];

    @ApiProperty({ description: `Post tags ids`, example: `[some_random_postgres_id]` })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    tags?: string[];
}
