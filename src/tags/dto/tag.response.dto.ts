import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTagResponseDto {
    @ApiProperty({ description: `Tag's id`, example: `Some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ description: `Tag's name`, example: `Tag name` })
    @IsNotEmpty()
    @IsString()
    name: string;
}
