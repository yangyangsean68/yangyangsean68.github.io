import { Link, useParams } from 'react-router-dom'
import { StatusBlock } from '../components/status/StatusBlock'
import { useProject } from '../hooks/useProject'

const statusLabel = {
  ACTIVE: '运行中',
  STANDBY: '待机',
} as const

export function ProjectDetailPage() {
  const { id } = useParams()
  const project = useProject(id)

  return (
    <section className="detail">
      <p className="hero-tag">
        <Link to="/projects" className="glow cursor-target">
          &lt; 返回作品列表
        </Link>
      </p>
      <StatusBlock state={project}>
        {(data) => (
          <article className="project-card">
            <div className="skill-head">
              <span className="glow">+--- 作品 / {data.title} ---+</span>
              <span className={data.status === 'ACTIVE' ? 'ready' : 'muted'}>
                [{statusLabel[data.status]}]
              </span>
            </div>
            <h1 className="glow">{data.title}</h1>
            <p className="muted">
              {data.year} · {data.tags.join(' · ')}
            </p>
            <p>{data.description}</p>
            <div className="schematic">
              <div className="muted">[ {data.schematicLabel} ]</div>
              <pre>{data.schematic}</pre>
            </div>
            {data.url ? (
              <a className="bracket-btn cursor-target" href={data.url} target="_blank" rel="noreferrer">
                [ 打开链接 ]
              </a>
            ) : null}
          </article>
        )}
      </StatusBlock>
    </section>
  )
}
