import { Intro } from './components/Intro'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Catalog } from './components/Catalog'
import { Gallery } from './components/Gallery'
import { Results } from './components/Results'
import { Experience } from './components/Experience'
import { Testimonials } from './components/Testimonials'
import { Location } from './components/Location'
import { CtaBooking } from './components/CtaBooking'
import { Footer } from './components/Footer'
import { ContactShortcuts } from './components/ContactShortcuts'
import { useAnimations } from './hooks/useAnimations'

export default function App() {
  useAnimations()
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
      >
        Pular para o conteúdo
      </a>
      <Intro />
      <Header />
      <main id="conteudo">
        <Hero />
        <Catalog />
        <Gallery />
        <Results />
        <About />
        <Experience />
        <Testimonials />
        <Location />
        <CtaBooking />
      </main>
      <Footer />
      <ContactShortcuts />
    </>
  )
}
