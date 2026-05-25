import { ArrowUpRight } from 'lucide-react'
import Button from './Button'
import ImageOverlay from './ImageOverlay'

const ProjectCard = ({ project }) => (
  <div className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-brand-border bg-white/[0.03]">
    <ImageOverlay
      alt={project.title}
      className="h-72 rounded-none border-0"
      image={project.image}
      overlayClassName="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/15 to-transparent"
      parallax={24}
    >
      <div className="flex h-full items-end p-6">
        <span className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold backdrop-blur-xl">
          {project.tag}
        </span>
      </div>
    </ImageOverlay>

    <div className="flex flex-1 flex-col gap-6 p-6 sm:p-7">
      <div className="space-y-3">
        <p className="text-[0.72rem] uppercase tracking-[0.3em] text-brand-muted">
          {project.location}
        </p>
        <h3 className="text-2xl">{project.title}</h3>
        <p className="copy-muted">{project.summary}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {project.stats.map((item) => (
          <span
            key={item}
            className="rounded-full border border-brand-border px-3 py-2 text-xs uppercase tracking-[0.22em] text-brand-muted"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <Button size="sm" to={project.link} variant="secondary">
          Discover
          <ArrowUpRight size={16} />
        </Button>
      </div>
    </div>
  </div>
)

export default ProjectCard
