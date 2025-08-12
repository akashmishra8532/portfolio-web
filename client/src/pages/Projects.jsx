import constants from '../data/constants'
import ProjectCard from '../components/ProjectCard'

export default function Projects({ compact = false }) {
  const list = compact ? constants.projects.slice(0, 3) : constants.projects
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {list.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </section>
  )
}


