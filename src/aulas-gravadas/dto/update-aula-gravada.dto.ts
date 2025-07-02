//src/aulas-gravadas/dto/update-aula-gravada.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateAulaGravadaDto } from './create-aula-gravada.dto';

export class UpdateAulaGravadaDto extends PartialType(CreateAulaGravadaDto) {}