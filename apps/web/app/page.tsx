import { Button } from '@repo/ui/components/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card'
import { Input } from '@repo/ui/components/input'
import { unstable_cache } from 'next/cache'
import { redirect } from 'next/navigation'

import type { PageProps } from './types/props'

import { trpc } from '~/lib/trpc'

// eslint-disable-next-line @typescript-eslint/require-await
async function onSubmit(formData: FormData) {
  'use server'
  const name = formData.get('name')?.toString()

  if (!name) return

  redirect(`/?name=${name}`)
}

export default async function Home({ searchParams }: PageProps) {
  const { name = 'World' } = await searchParams

  const { message } = await unstable_cache(
    () => trpc.app.greeting.query({ name }),
    [name],
    {
      tags: ['greeting'],
    }
  )()

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="flex w-full max-w-[600px] flex-col gap-4">
        <CardHeader>
          <CardTitle className="text-center text-3xl">{message}</CardTitle>
        </CardHeader>

        <CardContent>
          <form action={onSubmit} className="flex gap-2">
            <Input placeholder="Name" name="name" />

            <Button type="submit" className="gap-1">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
