import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(cookieParser())
  console.warn('App will start on localhost:8000')
  await app.listen(8000, 'backend')
}
bootstrap()
