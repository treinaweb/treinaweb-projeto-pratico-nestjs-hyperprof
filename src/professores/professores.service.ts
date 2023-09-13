import { Injectable } from '@nestjs/common';
import { ProfessorMapperImpl } from './mappers/professor.mapper-impl';
import { Like, Repository } from 'typeorm';
import { Professor } from './entities/professor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfessorNotFoundException } from './exceptions/professor-not-found-exception';

@Injectable()
export class ProfessoresService {
  constructor(
    private professorMapper: ProfessorMapperImpl,
    @InjectRepository(Professor)
    private professorRepository: Repository<Professor>,
  ) {}
  create() {
    return 'This action adds a new professore';
  }

  async findAll(param: string) {
    if (!param) param = '';
    const professores = await this.professorRepository.find({
      where: {
        descricao: Like(`%${param}%`),
      },
    });

    return professores.map((professor) =>
      this.professorMapper.toProfessorResponse(professor),
    );
  }

  async findOne(id: number) {
    try {
      const professor = await this.professorRepository.findOneByOrFail({
        id: id,
      });
      return this.professorMapper.toProfessorResponse(professor);
    } catch (error) {
      if (error.name === 'EntityNotFoundError') {
        throw new ProfessorNotFoundException();
      }
    }
  }

  update(id: number) {
    return `This action updates a #${id} professore`;
  }

  remove(id: number) {
    return `This action removes a #${id} professore`;
  }
}
