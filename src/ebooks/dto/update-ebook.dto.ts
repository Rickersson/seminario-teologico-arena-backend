//src/ebooks/dto/update-ebook.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateEbookDto } from './create-ebook.dto';

export class UpdateEbookDto extends PartialType(CreateEbookDto) {}
