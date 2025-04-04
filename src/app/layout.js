// src/app/layout.js
import './globals.css' // Global styles for the application
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'abdilahi99official | Developer Portfolio',
  description: 'Web & Mobile Developer | AI/ML Enthusiast',
}
//Root structure of the application.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans antialiased">
        <Navbar />
        <main className="min-h-screen px-4 md:px-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
