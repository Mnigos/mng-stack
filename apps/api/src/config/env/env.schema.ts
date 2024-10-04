import { z } from 'zod'

export const envSchema = z.object({
  PORT: z.coerce.number().optional().default(4000),
})

export type Env = z.infer<typeof envSchema>
