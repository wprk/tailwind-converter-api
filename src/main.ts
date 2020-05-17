import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const serverConfig: ConfigService = app.get(ConfigService)
  app.enableCors()
  await app.listen(serverConfig.get<number>('server.port'))
}
bootstrap()
