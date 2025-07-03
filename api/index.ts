import { AppModule } from '../src/app.module';
import { Handler } from '../src/server';
import { createNestServer } from '../src/main';

export default Handler(createNestServer(AppModule));