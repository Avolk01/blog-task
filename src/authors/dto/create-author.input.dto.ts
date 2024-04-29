import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAuthorInputDto {
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
