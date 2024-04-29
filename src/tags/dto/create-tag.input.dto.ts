import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTagInputDto {
    @ApiProperty({ description: `Tag's name`, example: `Tag name` })
    @IsNotEmpty()
    @IsString()
    name: string;
}
