import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class NodemailerService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'henrique.jobandwork@gmail.com',
      pass: 'zfgd nsqy jqhd rxfc',
    },
  });

  async enviarNovoUsuarioEmail(nome: string, email: string): Promise<void> {
    const info = await this.transporter.sendMail({
      from: '"Sistema Seminário" <henrique.jobandwork@gmail.com>',
      to: 'cursoteologicoarena@gmail.com',
      subject: 'Novo usuário registrado',
      text: `Novo usuário registrado:\n\nNome: ${nome}\nEmail: ${email}`,
    });

    console.log('Email enviado:', info.messageId);
  }
}