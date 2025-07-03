import { AppModule } from '../src/app.module';
import { createNestServer } from '../src/main';

module.exports = async (req: any, res: any) => {
  const server = await createNestServer(AppModule);
  return server(req, res);
};