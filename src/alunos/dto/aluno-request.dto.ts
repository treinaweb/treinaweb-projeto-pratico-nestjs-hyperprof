import { Expose } from 'class-transformer';

export class AlunoRequestDto {
  nome: string;
  email: string;
  @Expose({ name: 'data_aula' })
  dataAula: Date;
}
