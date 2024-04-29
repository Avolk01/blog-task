import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryInputDto {
    @ApiProperty({ description: `Category's name`, example: `Category name` })
    @IsNotEmpty()
    @IsString()
    name: string;
}
