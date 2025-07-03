import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { createReadStream } from 'fs';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return 'API Seminário Teológico - Online';
  }

  @Get('favicon.ico')
  getFavicon(@Res() res: Response) {
    const pathToFavicon = join(__dirname, '..', 'public', 'favicon.ico');
    const stream = createReadStream(pathToFavicon);
    stream.pipe(res);
  }
}