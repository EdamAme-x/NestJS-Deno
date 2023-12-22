import { NestFactory } from 'npm:@nestjs/core';
import { AppModule } from './app.module.ts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();
