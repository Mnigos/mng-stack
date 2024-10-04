import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

class MockPointerEvent extends Event {
  button: number
  ctrlKey: boolean
  pointerType: string

  constructor(type: string, props: PointerEventInit) {
    super(type, props)
    this.button = props.button ?? 0
    this.ctrlKey = props.ctrlKey ?? false
    this.pointerType = props.pointerType ?? 'mouse'
  }
}

window.PointerEvent = MockPointerEvent as unknown as typeof PointerEvent
window.HTMLElement.prototype.scrollIntoView = vi.fn()
window.HTMLElement.prototype.releasePointerCapture = vi.fn()
window.HTMLElement.prototype.hasPointerCapture = vi.fn()

afterEach(() => {
  cleanup()
})
