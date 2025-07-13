import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Embriologia Simplificada - DN',
  description: 'Criado para Fins Educacionais',
  generator: '.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
