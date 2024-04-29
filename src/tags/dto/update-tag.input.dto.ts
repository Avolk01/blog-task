import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTagInputDto {
    @ApiProperty({ description: `Tag's name`, example: `Tag` })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ description: `Tag's id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    id: string;
}
