import { Expose } from 'class-transformer';
import { IsDateString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class AlunoRequestDto {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @Length(3, 100, {
    message: 'Nome deve ter no mínimo 3 caracteres e no máximo 100 caracteres',
  })
  nome: string;

  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsDateString({}, { message: 'Data Inválida' })
  @Expose({ name: 'data_aula' })
  dataAula: Date;
}
