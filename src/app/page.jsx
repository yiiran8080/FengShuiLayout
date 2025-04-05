import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import BeforeAfter from '@/components/BeforeAfter'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BeforeAfter />
        <FAQ />
      </main>
      <Footer />
    </>
  )
} 