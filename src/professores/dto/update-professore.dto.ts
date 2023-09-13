import { PartialType } from '@nestjs/mapped-types';
import { ProfessorResponseDto } from './professor-response.dto';

export class UpdateProfessoreDto extends PartialType(ProfessorResponseDto) {}
