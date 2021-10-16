import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CoordinatorDto {
    Id: number;

    @IsString()
    @MinLength(3, { message: 'O nome deve conter no minimo 3 caracteres' })
    @MaxLength(100, { message: 'O nome deve conter no máxomo 100 caracteres' })
    Name: string;

    @IsString()
    @MinLength(3, { message: 'O sobrenome deve conter no minimo 3 caracteres' })
    @MaxLength(100, { message: 'O sobrenome deve conter no máxomo 100 caracteres' })
    LastName: string;

    @IsString()
    @IsEmail()
    @MinLength(3, { message: 'O email deve conter no minimo 3 caracteres' })
    @MaxLength(100, { message: 'O email deve conter no máxomo 100 caracteres' })
    Email: string;

    UpdatedAt: Date;

    CreatedAt: Date;
}