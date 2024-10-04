import '@repo/ui/tailwind.css'

import type { LayoutProps } from './types/props'

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="dark">
        <div className="min-h-screen p-4">{children}</div>
      </body>
    </html>
  )
}
