import RoughCard from './RoughCard'
import { projects } from '../data/projects'
import { Squiggle } from './Doodles'

function Tag({ label }) {
  return (
    <span className="inline-block text-xs font-body font-semibold px-2.5 py-0.5 bg-ink/8 text-ink/70 border border-ink/15 mr-1.5 mb-1.5">
      {label}
    </span>
  )
}

function ProjectCard({ project }) {
  return (
    <RoughCard
      style={{ '--card-rotate': `${project.rotate}deg` }}
    >
      {/* Accent color strip */}
      <div
        className="w-10 h-1.5 mb-4 rounded-full"
        style={{ background: project.highlight }}
      />
      <h3 className="font-caveat font-semibold text-2xl text-ink leading-tight mb-3">
        {project.title}
      </h3>
      <p className="font-body text-sm text-ink/70 leading-relaxed mb-4">
        {project.desc}
      </p>
      <div className="flex flex-wrap mt-auto">
        {project.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </RoughCard>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14 text-center">
          <h2 className="font-caveat font-bold text-5xl sm:text-6xl text-ink mb-3">
            selected work
          </h2>
          <Squiggle width={100} className="mx-auto" />
          <p className="font-body text-ink/55 mt-4 text-base max-w-md mx-auto">
            strategy decks, ops frameworks, and tools I've built, mostly for
            tech &amp; consumer companies
          </p>
        </div>

        {/* 3-col responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
