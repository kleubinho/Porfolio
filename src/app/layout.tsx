import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['greek-ext'] })

export const metadata = {
  title: 'Portfólio Kleber',
  description: 'Portfólio usando next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
