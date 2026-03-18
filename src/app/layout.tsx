import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RoWning AUNL — Circuit training sur ergomètre · Lyon',
  description: 'Circuit training intensif sur ergomètre. Format entreprise midi ou séances ouvertes. Labellisé RoWning FFA. Union Nautique de Lyon.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
