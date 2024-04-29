import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateAuthorInputDto {
    @ApiProperty({ description: `color's id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ description: `Author's first name`, example: `Artem` })
    @IsOptional()
    @IsString()
    firstName: string;

    @ApiProperty({ description: `Author's last name`, example: `Volkodav` })
    @IsOptional()
    @IsString()
    lastName: string;

    @ApiProperty({ description: `Author's nickname`, example: `Avolk` })
    @IsOptional()
    @IsString()
    nickname: string;
}
