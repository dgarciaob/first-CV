import HeroSection from './components/HeroSection'
import About from './components/AboutSection'
import ChangeLifeSection from './components/ChangeLifeSection'
import LastSection from './components/LastSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] mx-auto px-12 py-4">
      <HeroSection />
      <About />
      <ChangeLifeSection />
      <LastSection />
    </main>
  )
}
