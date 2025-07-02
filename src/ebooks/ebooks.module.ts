// src/ebooks/ebooks.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EbooksController } from './ebooks.controller';
import { EbooksService } from './ebooks.service';
import { EbookSchema } from './models/ebook.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Ebook', schema: EbookSchema },
    ]),
  ],
  controllers: [EbooksController],
  providers: [EbooksService],
})
export class EbooksModule {}