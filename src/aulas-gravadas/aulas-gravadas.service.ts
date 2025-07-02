// src/aulas-gravadas/aulas-gravadas.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { AulaGravada } from './entities/aula-gravada.entity';
import { CreateAulaGravadaDto } from './dto/create-aula-gravada.dto';
import { UpdateAulaGravadaDto } from './dto/update-aula-gravada.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class AulasGravadasService {
  constructor(
    @InjectModel('AulaGravada') private aulaGravadaModel: Model<Document & AulaGravada>,
  ) {}

  async create(createAulaGravadaDto: CreateAulaGravadaDto): Promise<AulaGravada> {
    const createdAulaGravada = new this.aulaGravadaModel(createAulaGravadaDto);
    return createdAulaGravada.save();
  }

  async findAll(): Promise<AulaGravada[]> {
    return this.aulaGravadaModel.find().lean().exec();
  }

  async findOne(id: string): Promise<AulaGravada> {
    const aulaGravada = await this.aulaGravadaModel.findById(id).lean().exec();
    if (!aulaGravada) {
      throw new NotFoundException(`Aula Gravada com ID ${id} não encontrada`);
    }
    return aulaGravada;
  }

  async update(id: string, updateAulaGravadaDto: UpdateAulaGravadaDto): Promise<AulaGravada> {
    const aulaGravada = await this.aulaGravadaModel
      .findByIdAndUpdate(id, updateAulaGravadaDto, { new: true })
      .lean()
      .exec();
    if (!aulaGravada) {
      throw new NotFoundException(`Aula Gravada com ID ${id} não encontrada`);
    }
    return aulaGravada;
  }

  async delete(id: string): Promise<void> {
    const aulaGravada = await this.aulaGravadaModel.findByIdAndDelete(id).exec();
    if (!aulaGravada) {
      throw new NotFoundException(`Aula Gravada com ID ${id} não encontrada`);
    }
  }
}