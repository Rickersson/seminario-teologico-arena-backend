// src/professores/professores.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Professor } from './entities/professor.entity';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { NotFoundException } from '@nestjs/common';
import { AuthUser } from 'src/auth/interfaces/auth-user.interface';
  import * as bcrypt from 'bcrypt';

@Injectable()
export class ProfessoresService {
  constructor(
    @InjectModel('Professor') private professorModel: Model<Document & Professor>,
  ) {}



async create(createProfessorDto: CreateProfessorDto): Promise<Professor> {
  const hashedPassword = await bcrypt.hash(createProfessorDto.senha, 10);
  const createdProfessor = new this.professorModel({
    ...createProfessorDto,
    senha: hashedPassword,
  });
  return createdProfessor.save();
}
  async findAll(): Promise<Professor[]> {
    return this.professorModel.find().lean().exec();
  }

  async findOne(id: string): Promise<Professor> {
    const professor = await this.professorModel.findById(id).lean().exec();
    if (!professor) {
      throw new NotFoundException(`Professor com ID ${id} não encontrado`);
    }
    return professor;
  }

  async update(id: string, updateProfessorDto: UpdateProfessorDto): Promise<Professor> {
    const professor = await this.professorModel
      .findByIdAndUpdate(id, updateProfessorDto, { new: true })
      .lean()
      .exec();
    if (!professor) {
      throw new NotFoundException(`Professor com ID ${id} não encontrado`);
    }
    return professor;
  }

  async delete(id: string): Promise<void> {
    const professor = await this.professorModel.findByIdAndDelete(id).exec();
    if (!professor) {
      throw new NotFoundException(`Professor com ID ${id} não encontrado`);
    }
  }

async findByEmail(email: string): Promise<AuthUser | null> {
  const professor = await this.professorModel.findOne({ email }).select('+senha').lean().exec();
  return professor as AuthUser;
}
}