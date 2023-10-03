import './globals.css'
import type { Metadata } from 'next'
import { body } from './fonts'

export const metadata: Metadata = {
  title: 'Jardin Calme',
  description: "L'application de jardinage qui favorise le partage, l'échange de plantes et la tranquillité dans le monde de la botanique.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={body.style}>{children}</body>
    </html>
  )
}
