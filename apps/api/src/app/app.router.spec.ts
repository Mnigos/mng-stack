import { Test, type TestingModule } from '@nestjs/testing'

import { AppRouter } from './app.router'

describe('AppRouter', () => {
  let moduleRef: TestingModule
  let appRouter: AppRouter

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      providers: [AppRouter],
    }).compile()

    appRouter = moduleRef.get(AppRouter)
  })

  afterAll(async () => {
    await moduleRef.close()
  })

  test('should be defined', () => {
    expect(appRouter).toBeDefined()
  })

  describe('greeting', () => {
    test('should return greeting', () => {
      const name = 'test'

      expect(appRouter.greeting(name)).toEqual({
        message: `Hello ${name}!`,
      })
    })
  })
})
