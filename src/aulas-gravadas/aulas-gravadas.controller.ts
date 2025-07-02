// src/aulas-gravadas/aulas-gravadas.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AulasGravadasService } from './aulas-gravadas.service';
import { CreateAulaGravadaDto } from './dto/create-aula-gravada.dto';
import { UpdateAulaGravadaDto } from './dto/update-aula-gravada.dto';
import { AulaGravada } from './entities/aula-gravada.entity';

@Controller('aulas-gravadas')
export class AulasGravadasController {
  constructor(private readonly aulaGravadaService: AulasGravadasService) {}

  @Get()
  async getAll(): Promise<AulaGravada[]> {
    return this.aulaGravadaService.findAll();
  }

  @Post()
  async create(@Body() createAulaGravadaDto: CreateAulaGravadaDto): Promise<AulaGravada> {
    return this.aulaGravadaService.create(createAulaGravadaDto);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<AulaGravada> {
    return this.aulaGravadaService.findOne(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() updateAulaGravadaDto: UpdateAulaGravadaDto,
  ): Promise<AulaGravada> {
    return this.aulaGravadaService.update(id, updateAulaGravadaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    return this.aulaGravadaService.delete(id);
  }
}