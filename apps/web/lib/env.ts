import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    API_URL: z.string().url().optional().default('http://localhost:4000'),
  },
  experimental__runtimeEnv: process.env,
})
