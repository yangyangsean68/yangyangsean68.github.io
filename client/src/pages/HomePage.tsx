import { Link } from 'react-router-dom'
import { StatusBlock } from '../components/status/StatusBlock'
import { useProfile } from '../hooks/useProfile'

export function HomePage() {
  const profile = useProfile()

  return (
    <section className="hero">
      <div className="hero-rule">
        +--- 系统://初始化终端_V.2.4.1 [主会话] ---+
      </div>
      <StatusBlock state={profile}>
        {(data) => (
          <>
            <h1>你好，我是 {data.name}</h1>
            <div className="hero-titles">
              {data.titles.map((title, index) => (
                <span key={title}>
                  {index > 0 ? <span className="hero-sep"> :: </span> : null}
                  {title}
                </span>
              ))}
            </div>
            <Link to="/contact" className="bracket-btn cursor-target">
              [ 联系我 ]
            </Link>
            <p className="hero-tag">&gt; {data.tagline}</p>
          </>
        )}
      </StatusBlock>
      <div className="hero-telemetry">
        <div className="hero-telemetry-row">
          <span>内存占用: 384KB / 640KB</span>
          <span className="glow">P43 磷光</span>
        </div>
        <div className="hero-telemetry-row">
          <span>运行时间: 984 天 14 时 22 分</span>
          <span className="ready">守护进程: 活动</span>
        </div>
      </div>
    </section>
  )
}
