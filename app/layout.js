import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'オートエモーションコンバート璃奈ちゃんボード(web版)',
  description: 'オートエモーションコンバート璃奈ちゃんボード(web版)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="js" data-theme="light">
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
