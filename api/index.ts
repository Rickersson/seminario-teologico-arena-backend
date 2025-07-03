import { AppModule } from '../src/app.module';
import { createNestServer } from '../src/main';
import { Handler} from '../src/server'

export const handler = Handler(createNestServer(AppModule));
