import {
  Controller,
  HttpCode,
  Post,
  UploadedFile,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FotoService } from './foto.service';
import { AuthGuard } from '@nestjs/passport';
import { Professor } from 'src/professores/entities/professor.entity';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerconfig } from './multer-config';
import { FotoExceptionFilter } from './foto-excpetion.filter';

@Controller('api/professores/foto')
export class FotoController {
  constructor(private readonly fotoService: FotoService) {}

  @HttpCode(200)
  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UseFilters(FotoExceptionFilter)
  @UseInterceptors(FileInterceptor('foto_perfil', multerconfig))
  async updateFoto(
    @GetUser() professor: Professor,
    @UploadedFile() file: Express.MulterS3.File,
  ) {
    return await this.fotoService.create(professor, file);
  }
}
