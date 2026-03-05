import { agents } from '../data/agents'

function Tag({ label }) {
  return (
    <span className="inline-block text-xs font-body font-semibold px-2.5 py-0.5 border border-white/20 text-white/50 mr-1.5 mb-1.5">
      {label}
    </span>
  )
}

function Badge({ label }) {
  const isLive = label === 'Live'
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-body font-semibold px-2.5 py-1 ${
        isLive
          ? 'bg-green-400/20 text-green-300 border border-green-400/30'
          : 'bg-white/10 text-white/40 border border-white/15'
      }`}
    >
      {isLive && (
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
      )}
      {label}
    </span>
  )
}

function AgentCard({ agent }) {
  const isLive = agent.badge === 'Live'

  return (
    <a
      href={agent.url}
      target={agent.url !== '#' ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={`group block p-8 border border-white/10 transition-all duration-300 ${
        isLive
          ? 'hover:border-white/30 hover:bg-white/5'
          : 'opacity-60 cursor-default'
      }`}
    >
      <div className="flex items-start justify-between mb-6 gap-3">
        {/* Accent dot */}
        <div
          className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
          style={{ background: agent.highlight }}
        />
        <Badge label={agent.badge} />
      </div>

      <h3 className="font-caveat font-semibold text-2xl text-white leading-tight mb-3 group-hover:text-white transition-colors">
        {agent.title}
      </h3>

      <p className="font-body text-sm text-white/55 leading-relaxed mb-5">
        {agent.desc}
      </p>

      <div className="flex flex-wrap">
        {agent.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

      {isLive && (
        <div className="mt-4 font-body text-sm font-semibold text-white/30 group-hover:text-white/70 transition-colors">
          open →
        </div>
      )}
    </a>
  )
}

export default function Agents() {
  return (
    <section id="agents" className="py-24 px-6 bg-ink">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="font-caveat text-lg text-white/40 mb-2">what i've built</p>
          <h2 className="font-caveat font-bold text-5xl sm:text-6xl text-white">
            AI & Agents
          </h2>
          <p className="font-body text-white/45 mt-4 text-base max-w-md leading-relaxed">
            tools that combine strategy thinking with AI, built to solve real
            problems, not just demo well
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {agents.map((a) => (
            <AgentCard key={a.id} agent={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
