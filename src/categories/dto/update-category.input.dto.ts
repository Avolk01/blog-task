import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryInputDto {
    @ApiProperty({ description: `color's id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ description: `Category's name`, example: `Category name` })
    @IsNotEmpty()
    @IsString()
    name: string;
}
