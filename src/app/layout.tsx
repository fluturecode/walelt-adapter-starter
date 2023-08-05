import { Wallet } from '@/components/Wallet'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Wallet>
          {children}
        </Wallet>
      </body>
    </html>
  )
}
