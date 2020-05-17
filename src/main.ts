import { NestFactory } from '@nestjs/core';
import { ConvertModule } from './convert.module';

async function bootstrap() {
  const app = await NestFactory.create(ConvertModule);
  await app.listen(3000);
}
bootstrap();
