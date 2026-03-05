import { Squiggle } from './Doodles'

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-ink text-paper px-10 py-14 text-center relative overflow-hidden">
          {/* Decorative squiggles */}
          <div className="absolute top-4 left-6 opacity-20">
            <Squiggle width={60} className="invert" />
          </div>
          <div className="absolute bottom-4 right-6 opacity-20">
            <Squiggle width={60} className="invert" />
          </div>

          <h2 className="font-caveat font-bold text-5xl sm:text-6xl mb-4">
            want the full picture?
          </h2>
          <p className="font-body text-paper/70 text-base max-w-md mx-auto mb-10 leading-relaxed">
            Six years across BCG and P&amp;G, an MBA from Stanford GSB, and a
            track record of turning ambiguous problems into clear plans.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/sonal-chopra-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-paper text-ink font-body font-semibold px-8 py-3 border-2 border-paper hover:bg-transparent hover:text-paper transition-colors duration-200"
            >
              download resume ↓
            </a>
            <a
              href="https://linkedin.com/in/sonal-chopra7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-paper font-body font-semibold px-8 py-3 border-2 border-paper hover:bg-paper hover:text-ink transition-colors duration-200"
            >
              view LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
