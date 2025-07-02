//src/ebooks/ebook.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Ebook } from './entities/ebook.entity';
import { CreateEbookDto } from './dto/create-ebook.dto';

@Injectable()
export class EbooksService {
  constructor(
    @InjectModel('Ebook') private readonly ebookModel: Model<Document & Ebook>,
  ) {}

 async create(createEbookDto: any): Promise<Ebook> {
  const createdEbook = new this.ebookModel(createEbookDto);
  return createdEbook.save();
}

  async findAll(): Promise<Ebook[]> {
    return this.ebookModel.find().lean().exec();
  }

  async findOne(id: string): Promise<Ebook> {
  const ebook = await this.ebookModel.findById(id).exec();
  if (!ebook) {
    throw new NotFoundException(`Ebook com ID ${id} não encontrado`);
  }
  return ebook;
}

async update(id: string, updateEbookDto: any): Promise<Ebook> {
  const ebook = await this.ebookModel
    .findByIdAndUpdate(id, updateEbookDto, { new: true })
    .exec();
  
  if (!ebook) {
    throw new NotFoundException(`Ebook com ID ${id} não encontrado`);
  }
  
  return ebook;
}

  async delete(id: string): Promise<void> {
    await this.ebookModel.findByIdAndDelete(id).exec();
  }
}