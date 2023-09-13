import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { ProfessoresService } from './professores.service';

@Controller('api/professores')
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) {}

  /*   @Post()
  create(@Body() createProfessoreDto: CreateProfessoreDto) {
    return this.professoresService.create(createProfessoreDto);
  } */

  @Get()
  async findAll(@Query('q') param: string) {
    return await this.professoresService.findAll(param);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.professoresService.findOne(+id);
  }

  /*   @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfessoreDto: UpdateProfessoreDto,
  ) {
    return this.professoresService.update(+id, updateProfessoreDto);
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professoresService.remove(+id);
  }
}
