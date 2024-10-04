import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TRPCModule } from 'nestjs-trpc'

import { AppRouter } from './app.router'

import { EnvModule, envSchema } from '~/config/env'

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: './@generated',
    }),
    ConfigModule.forRoot({
      validate: env => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
  ],
  providers: [AppRouter],
})
export class AppModule {}
