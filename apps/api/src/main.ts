import { NestFactory } from '@nestjs/core'

import { AppModule } from '~/app'
import { EnvService } from '~/config/env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  })

  const envService = app.get(EnvService)

  await app.listen(envService.get('PORT'))
}
bootstrap()
