import { IsDateString, IsEmail, IsNumber, IsString } from "class-validator";

export class CreateEstudanteDto {
    @IsString()
    nome: string;

    @IsString()
    matricula: string;

    @IsEmail()
    email: string;

    @IsDateString()
    dataNascimento: string;

    @IsNumber()
    cidadeId: number;
}
