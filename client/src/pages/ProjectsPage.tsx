import { ProjectCard } from '../components/project/ProjectCard'
import { StatusBlock } from '../components/status/StatusBlock'
import { useProjects } from '../hooks/useProjects'

export function ProjectsPage() {
  const projects = useProjects()

  return (
    <div className="works-wrap">
      <div className="crt-strip">
        <span className="glow">root@sean:~$ ls -la ./作品/</span>
        <span className="ready">[在线]</span>
      </div>
      <StatusBlock state={projects}>
        {(list) => (
          <div className="works-grid">
            {list.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </StatusBlock>
    </div>
  )
}
