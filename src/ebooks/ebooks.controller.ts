//src/ebooks/ebook.controller.ts

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
  UploadedFile,
  UseInterceptors,
  Res,
  NotFoundException,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { EbooksService } from './ebooks.service';
import { CreateEbookDto } from './dto/create-ebook.dto';
import { multerConfig } from '../utils/multer.config';
import { Ebook } from './entities/ebook.entity';

@Controller('ebooks')
export class EbooksController {
  constructor(private readonly ebookService: EbooksService) {}

  @Get()
  async getAll(): Promise<Ebook[]> {
    return this.ebookService.findAll();
  }

 // Em EbooksController
@Post('upload')
@UseInterceptors(FileInterceptor('file', multerConfig))
async uploadFile(
  @UploadedFile() file: Express.Multer.File,
  @Body() createEbookDto: CreateEbookDto,
): Promise<any> {
  if (!file || !file.buffer) {
    throw new BadRequestException('Arquivo inválido ou ausente');
  }

  const base64Content = file.buffer.toString('base64');
  const ebookData = {
    ...createEbookDto,
    content: base64Content,
  };
  
  return this.ebookService.create(ebookData);
}

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Ebook> {
    return this.ebookService.findOne(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() updateEbookDto: any,
  ): Promise<Ebook> {
    return this.ebookService.update(id, updateEbookDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    return this.ebookService.delete(id);
  }

 @Get(':id/download')
async downloadFile(@Param('id') id: string, @Res() res: Response) {
  const ebook = await this.ebookService.findOne(id);
  
  const extensao = ebook.nome.split('.').pop()?.toLowerCase() || 'bin';
  const mimeType = this.getMimeType(extensao);

  res.setHeader('Content-Type', mimeType);
  res.setHeader('Content-Disposition', `attachment; filename="${ebook.nome}"`);
  res.send(Buffer.from(ebook.content, 'base64'));
}

  private getMimeType(extensao: string): string {
    switch (extensao) {
      case 'pdf': return 'application/pdf';
      case 'epub': return 'application/epub+zip';
      case 'mobi': return 'application/x-mobipocket-ebook';
      case 'txt': return 'text/plain';
      default: return 'application/octet-stream';
    }
  }
}