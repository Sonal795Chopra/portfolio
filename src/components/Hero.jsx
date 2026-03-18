import { Star, Sparkle, ArrowDown, ArrowCurved } from './Doodles'

const words = [
  { text: 'Strategy.', color: '#fde68a' },
  { text: 'Ops.', color: '#bbf7d0' },
  { text: 'Impact.', color: '#fecdd3' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Scattered doodles */}
      <div className="absolute top-24 left-8 sm:left-16 animate-wiggle opacity-60">
        <Star size={40} />
      </div>
      <div className="absolute top-32 right-10 sm:right-20 animate-wiggle-delay opacity-50">
        <Sparkle size={32} />
      </div>
      <div className="absolute bottom-32 left-12 sm:left-24 opacity-40 -rotate-12">
        <ArrowCurved size={56} />
      </div>
      <div className="absolute bottom-40 right-8 sm:right-20 animate-wiggle opacity-45">
        <Sparkle size={24} />
      </div>
      <div className="absolute top-1/3 left-4 opacity-25">
        <Star size={22} />
      </div>
      <div className="absolute top-1/2 right-4 opacity-25">
        <Sparkle size={18} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl">
        {/* Eyebrow */}
        <p className="font-caveat text-xl sm:text-2xl text-ink/50 mb-4 tracking-wide">
          hi, i'm
        </p>

        {/* Giant name */}
        <h1
          className="font-caveat font-bold text-ink leading-none mb-6"
          style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
        >
          Sonal Chopra
        </h1>

        {/* Tagline with highlighted words */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-4">
          {words.map((w) => (
            <span
              key={w.text}
              className="word-highlight font-caveat font-semibold text-3xl sm:text-4xl"
              style={{ '--highlight-color': w.color }}
            >
              {w.text}
            </span>
          ))}
        </div>

        {/* Sub-tagline */}
        <p className="font-body text-base sm:text-lg text-ink/60 max-w-xl mx-auto mt-4 mb-10 leading-relaxed">
          Stanford MBA '26 · ex-Founder · ex-BCG · ex-P&amp;G · helping tech companies move
          faster and smarter
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-ink text-paper font-body font-semibold px-7 py-3 rounded-none border-2 border-ink hover:bg-paper hover:text-ink transition-colors duration-200"
          >
            see my work ↓
          </a>
          <a
            href="#resume"
            className="bg-transparent text-ink font-body font-semibold px-7 py-3 border-2 border-ink hover:bg-ink hover:text-paper transition-colors duration-200"
          >
            download resume →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow opacity-40">
        <ArrowDown size={32} />
      </div>
    </section>
  )
}
