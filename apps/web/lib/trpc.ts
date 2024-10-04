import { createTRPCClient, httpBatchLink } from '@trpc/client'

import type { AppRouter } from '../../api'

import { env } from './env'

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${env.API_URL}/trpc`,
    }),
  ],
})
