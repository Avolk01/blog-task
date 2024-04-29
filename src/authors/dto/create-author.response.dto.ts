import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAuthorResponseDto {
    @ApiProperty({ description: `Category's id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ description: `Author's first name`, example: `Artem` })
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @ApiProperty({ description: `Author's last name`, example: `Volkodav` })
    @IsNotEmpty()
    @IsString()
    lastName: string;

    @ApiProperty({ description: `Author's nickname`, example: `Avolk` })
    @IsOptional()
    @IsString()
    nickname: string;
}
