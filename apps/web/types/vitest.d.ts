import 'vitest'
import { type TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'

declare global {
  namespace Vi {
    type Assertion<T = unknown> = TestingLibraryMatchers<T, void>
  }
}
