import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Brief } from './components/Brief'
import { Locations } from './components/Locations'
import { JourneyMap } from './components/JourneyMap'
import { UniqueFeatures } from './components/UniqueFeatures'
import { ProgramTimeline } from './components/ProgramTimeline'
import { FullProgram } from './components/FullProgram'
import { AboutInstructor } from './components/AboutInstructor'
import { Gallery } from './components/Gallery'
import { PracticalInfo } from './components/PracticalInfo'
import { FAQ } from './components/FAQ'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Brief />
        <Locations />
        <JourneyMap />
        <UniqueFeatures />
        <ProgramTimeline />
        <FullProgram />
        <AboutInstructor />
        <Gallery />
        <PracticalInfo />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}

export default App
