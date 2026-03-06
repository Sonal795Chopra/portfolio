import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Agents from './components/Agents'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Agents />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <footer className="text-center py-8 font-caveat text-lg text-ink/40">
        made with ✏️ and too much coffee · sonal chopra 2026
      </footer>
    </div>
  )
}
