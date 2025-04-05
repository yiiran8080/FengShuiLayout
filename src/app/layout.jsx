import './globals.css'

export const metadata = {
  title: 'Feng Shui App',
  description: 'A modern Feng Shui application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 