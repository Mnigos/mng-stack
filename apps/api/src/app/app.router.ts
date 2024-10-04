import { Input, Query, Router } from 'nestjs-trpc'
import { z } from 'zod'

@Router({ alias: 'app' })
export class AppRouter {
  @Query({
    input: z.object({ name: z.string() }),
    output: z.object({ message: z.string() }),
  })
  greeting(@Input('name') name: string) {
    return {
      message: `Hello ${name}!`,
    }
  }
}
