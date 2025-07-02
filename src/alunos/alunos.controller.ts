// src/alunos/aluno.controller.ts
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
  NotFoundException,
  UseGuards,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunoService: AlunosService) {}

  @Get()
  async getAll(): Promise<Aluno[]> {
    return this.alunoService.findAll();
  }

@Get('me')
@UseGuards(AuthGuard('jwt'))
async getAlunoLogado(@Req() req: Request) {
 

  const userId = req.user?.sub;
  if (!userId) throw new UnauthorizedException('Token inválido ou mal formado');

  const aluno = await this.alunoService.findById(userId);
  if (!aluno) throw new NotFoundException('Aluno não encontrado');

  return aluno;
}


@Post()
@HttpCode(HttpStatus.CREATED)
async create(@Body() createAlunoDto: CreateAlunoDto): Promise<Aluno> {
  return this.alunoService.create(createAlunoDto);
}

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Aluno> {
    const aluno = await this.alunoService.findOne(id);
    if (!aluno) {
      throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
    }
    return aluno;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() updateAlunoDto: UpdateAlunoDto,
  ): Promise<Aluno> {
    const aluno = await this.alunoService.update(id, updateAlunoDto);
    if (!aluno) {
      throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
    }
    return aluno;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    return this.alunoService.delete(id);
  }


}



