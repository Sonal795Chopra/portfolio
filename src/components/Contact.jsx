import { Squiggle } from './Doodles'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-caveat font-bold text-5xl sm:text-6xl text-ink mb-3">
          let's talk
        </h2>
        <Squiggle width={100} className="mx-auto mb-6" />

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 font-body text-sm font-semibold px-4 py-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
          Open to full-time roles starting summer 2026
        </div>

        <p className="font-body text-ink/60 text-base max-w-md mx-auto mb-10 leading-relaxed">
          I'm most excited about strategy &amp; ops roles at high-growth tech
          companies. If that sounds like a fit, reach out. I respond quickly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:sonal759@stanford.edu"
            className="group inline-flex items-center gap-2 bg-ink text-paper font-body font-semibold px-8 py-3 border-2 border-ink hover:bg-paper hover:text-ink transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            sonal759@stanford.edu
          </a>
          <a
            href="https://linkedin.com/in/sonal-chopra7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-ink font-body font-semibold px-8 py-3 border-2 border-ink hover:bg-ink hover:text-paper transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            linkedin.com/in/sonal-chopra7
          </a>
        </div>
      </div>
    </section>
  )
}
