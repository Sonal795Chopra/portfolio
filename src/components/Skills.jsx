import { Squiggle } from './Doodles'

const skills = [
  { category: 'Strategy & Ops', items: ['Go-to-Market Strategy', 'Strategic Planning', 'Operating Model Design', 'Market Entry', 'Portfolio Strategy'], highlight: '#fde68a' },
  { category: 'Analytics & Finance', items: ['Financial Modeling', 'Unit Economics', 'Data Analytics', 'Python', 'SQL', 'Tableau', 'PowerBI'], highlight: '#bbf7d0' },
  { category: 'AI & Tools', items: ['LLM Applications', 'AI Vendor Evaluation', 'Prompt Engineering', 'Airtable', 'Notion'], highlight: '#ddd6fe' },
  { category: 'Leadership', items: ['Cross-Functional Leadership', 'Executive Communications', 'Stakeholder Management', 'Chief of Staff'], highlight: '#fecdd3' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="font-caveat font-bold text-5xl sm:text-6xl text-ink mb-3">
            skills
          </h2>
          <Squiggle width={80} className="mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <div
                className="inline-block font-caveat font-semibold text-lg mb-4 px-3 py-0.5"
                style={{ background: group.highlight }}
              >
                {group.category}
              </div>
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li key={skill} className="font-body text-sm text-ink/70 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-ink/30 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
