import { NavLink } from 'react-router-dom'
import { useBoot } from './BootContext'

const links = [
  { to: '/', label: '01:首页', end: true },
  { to: '/about', label: '02:关于' },
  { to: '/projects', label: '03:作品' },
  { to: '/contact', label: '04:联系' },
]

export function CrtHeader({ prompt }: { prompt: string }) {
  const { replayBoot } = useBoot()

  return (
    <header className="crt-header">
      <div>
        <span className="crt-brand">{prompt}</span>
        <span className="crt-tty">[tty1]</span>
      </div>
      <nav className="crt-nav">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} className="cursor-target">
            {({ isActive }) =>
              isActive ? (
                <>
                  &gt; {link.label}
                  <span className="cursor" />
                </>
              ) : (
                link.label
              )
            }
          </NavLink>
        ))}
        <button type="button" className="bracket-btn run-build cursor-target" onClick={replayBoot}>
          [ 重新开机 ]
        </button>
      </nav>
    </header>
  )
}
