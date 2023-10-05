import { IsNotEmpty, Length } from 'class-validator';

export class ProfessorAuthRequestDto {
  @IsNotEmpty({ message: 'é obrigatório' })
  email: string;

  @Length(6, 20, {
    message: 'deve ter mínimo 6 caracteres, máximo 20 caracteres',
  })
  password: string;
}
