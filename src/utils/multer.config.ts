import { memoryStorage } from 'multer';


export const multerConfig = {
  storage: memoryStorage(), 
  limits: {
    fileSize: 1024 * 1024 * 8, // 8MB
  },
  fileFilter: (_req, file, callback) => {
    const tiposAceitos = /pdf|epub|mobi|txt/;
    const extensao = file.originalname.split('.').pop();
    const tipoValido = tiposAceitos.test(extensao);
    callback(tipoValido ? null : new Error('Tipo de arquivo inválido'), tipoValido);
  },
}; 

