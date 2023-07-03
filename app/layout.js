import { Footer, Header } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Biteville Foods',
  description: 'Biteville Foods',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'center-cont text-brandBlack'}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
