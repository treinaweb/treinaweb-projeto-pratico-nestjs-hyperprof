import { Expose } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class ProfessorRequestDto {
  @IsString({ message: 'Nome deve ser string' })
  @Length(3, 100, { message: 'Nome deve ter de 3 até 100 caracteres' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  nome: string;

  @IsEmail({}, { message: 'Email inválido' })
  @IsNotEmpty()
  email: string;

  @Max(100)
  @Min(18)
  @IsNotEmpty({ message: 'Idade não pode ser vazio' })
  idade: number;

  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  @Length(10, 500, {
    message:
      'Descrição deve ter no mínimo 10 caracteres e no máximo 500 caracteres',
  })
  descricao: string;

  @Expose({ name: 'valor_hora' })
  @IsNotEmpty({ message: 'Valor Hora não pode ser vazio' })
  @Max(500, { message: 'Valor Hora deve ser no máximo 500' })
  @Min(10, { message: 'Valor Hora deve ser no mínimo 10' })
  valorHora: number;

  @IsNotEmpty({ message: 'Password não pode ser vazio' })
  @Length(6)
  password: string;

  @Expose({ name: 'password_confirmation' })
  @IsNotEmpty({ message: 'Password Confirmation não pode ser vazio' })
  @Length(6)
  passworConfirmation: string;
}
