import { Injectable } from '@nestjs/common';
import { AlunoRequestDto } from './dto/aluno-request.dto';
import { Repository } from 'typeorm';
import { Aluno } from './entities/aluno.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AlunoMapperImpl } from './mappers/aluno.mapper-impl';

@Injectable()
export class AlunosService {
  constructor(
    @InjectRepository(Aluno)
    private alunoRepository: Repository<Aluno>,
    @InjectRepository(Professor)
    private professorRepository: Repository<Professor>,
    private alunoMapper: AlunoMapperImpl,
  ) {}

  async create(alunoRequestDto: AlunoRequestDto, professorId: number) {
    try {
      const professor = await this.professorRepository.findOneBy({
        id: professorId,
      });
      const aluno = this.alunoMapper.toAlunoEntity(alunoRequestDto);
      aluno.professor = professor;
      const alunoSalvo = await this.alunoRepository.save(aluno);
      return this.alunoMapper.toAlunoResponse(alunoSalvo);
    } catch (error) {
      console.log(error);
    }
  }

  async findByProfessor(professor: Professor) {
    const alunos = await this.alunoRepository.find({
      relations: { professor: true },
      where: { professor: { id: professor.id } },
    });

    return alunos.map((aluno) => this.alunoMapper.toAlunoResponse(aluno));
  }
}
