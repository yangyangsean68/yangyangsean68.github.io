import { Link } from 'react-router-dom'
import type { Project } from '../../types/api'
import { cn } from '../../utils/cn'

type ProjectCardProps = {
  project: Project
  index: number
  className?: string
}

const statusLabel = {
  ACTIVE: '运行中',
  STANDBY: '待机',
} as const

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  return (
    <article className={cn('project-card', 'cursor-target', className)}>
      <div>
        <div className="skill-head">
          <span className="glow">
            +--- 作品 / {String(index + 1).padStart(2, '0')} ---+
          </span>
          <span className={project.status === 'ACTIVE' ? 'ready' : 'muted'}>
            [{statusLabel[project.status]}]
          </span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <p className="muted">标签: {project.tags.join(' · ')}</p>
      </div>
      <div className="schematic">
        <div className="muted">[ {project.schematicLabel} ]</div>
        <pre>{project.schematic}</pre>
      </div>
      <div className="project-card-foot">
        <span>
          PID: {project.pid} // {project.mode}
        </span>
        <Link to={`/projects/${project.id}`} className="bracket-btn cursor-target">
          [ 打开 ]
        </Link>
      </div>
    </article>
  )
}
