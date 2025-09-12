import './globals.css'
import ClientComponents from './components/ClientComponents'

export const metadata = {
  title: 'Elbrit Life Sciences - Essential Vitamins & Health Products',
  description: 'Your health, physical and emotional well-being is important to us. Find essential vitamins, medical supplies, and health products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ClientComponents />
      </body>
    </html>
  )
}