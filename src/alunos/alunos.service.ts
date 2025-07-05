// src/alunos/alunos.service.ts
import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Aluno } from './entities/aluno.entity';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { NotFoundException } from '@nestjs/common';
import { AuthUser } from 'src/auth/interfaces/auth-user.interface';
import * as bcrypt from 'bcrypt';
import { Module } from './enums/module.enum';
import { MongoServerError } from 'mongodb';
import { NodemailerService } from 'src/nodemailer/nodemailer.service';

@Injectable()
export class AlunosService {
   constructor(@InjectModel('Aluno') private alunoModel: Model<Aluno>, private nodemailerService: NodemailerService) {}

  async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    const { cpf, email, senha } = createAlunoDto;
    
    // Valida CPF único
    const existingCpf = await this.alunoModel.findOne({ cpf }).exec();
    if (existingCpf) {
      throw new HttpException(
        { message: 'CPF já cadastrado' }, 
        HttpStatus.CONFLICT
      );
    }

    // Valida email único
    const existingEmail = await this.alunoModel.findOne({ email }).exec();
    if (existingEmail) {
      throw new HttpException(
        { message: 'Email já em uso' }, 
        HttpStatus.CONFLICT
      );
    }

    // Cria aluno com role padrão
    const alunoData = {
      ...createAlunoDto,
      role: 'aluno',
      senha: await bcrypt.hash(senha, 10),
      modulo: Module.MODULE_I,
      notaGeral: 0,
      notaQuiz: 0,
      pagamento: false
    };

  const createdAluno = new this.alunoModel(alunoData);
  const alunoSalvo = await createdAluno.save();

  
  await this.nodemailerService.enviarNovoUsuarioEmail(
    createAlunoDto.nome,
    createAlunoDto.email
  );

  return alunoSalvo;
  }
  async findAll(): Promise<Aluno[]> {
    const alunos = await this.alunoModel.find().lean().exec();
    return alunos;
  }

  async findById(id: string) {
  return this.alunoModel.findById(id).select('-senha');  
}

  async findOne(id: string): Promise<Aluno> {
    const aluno = await this.alunoModel.findById(id).lean().exec();
    if (!aluno) {
      throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
    }
    return aluno;
  }

  async update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<Aluno> {
    const aluno = await this.alunoModel
      .findByIdAndUpdate(id, updateAlunoDto, { new: true })
      .lean()
      .exec();
    if (!aluno) {
      throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
    }
    return aluno;
  }

  async delete(id: string): Promise<void> {
    const aluno = await this.alunoModel.findByIdAndDelete(id).exec();
    if (!aluno) {
      throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
    }
  }


async findByEmail(email: string): Promise<AuthUser | null> {
  const aluno = await this.alunoModel.findOne({ email }).select('+senha').lean().exec();
  return aluno as AuthUser;
}


}