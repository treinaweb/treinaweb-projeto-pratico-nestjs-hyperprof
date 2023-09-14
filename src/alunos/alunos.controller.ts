import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunoRequestDto } from './dto/aluno-request.dto';

@Controller('api')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post('/professores/:id/alunos')
  create(
    @Body() alunoRequestDto: AlunoRequestDto,
    @Param('id') professorId: number,
  ) {
    return this.alunosService.create(alunoRequestDto, professorId);
  }

  @Get()
  findAll() {
    return this.alunosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alunosService.findOne(+id);
  }

  /*   @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunosService.update(+id, updateAlunoDto);
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alunosService.remove(+id);
  }
}
