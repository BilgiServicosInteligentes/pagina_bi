import { Layout } from '@/components/layout'
import { Providers } from '@/providers'
import { Styles } from '@/styles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bilgi',
  description: 'Web site Bilgi'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Styles>
            <Layout>{children}</Layout>
          </Styles>
        </Providers>
      </body>
    </html>
  )
}
