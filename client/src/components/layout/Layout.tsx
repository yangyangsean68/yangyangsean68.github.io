import { useLocation } from 'react-router-dom'
import { BootOverlay } from '../crt/BootOverlay'
import { CrtFooter } from '../crt/CrtFooter'
import { CrtHeader } from '../crt/CrtHeader'
import { PageFade, paneFor } from './PageFade'

const prompts: Record<string, string> = {
  '/': 'root@sean:~$',
  '/about': 'root@sean:~$ cat ./关于.md',
  '/projects': 'root@sean:~$ ls ./作品',
  '/contact': 'root@sean:~$ 打开 ./联系',
}

function promptFor(pathname: string) {
  if (pathname.startsWith('/projects')) return 'root@sean:~$ ls ./作品'
  return prompts[pathname] ?? 'root@sean:~$'
}

export function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="crt-room">
      <div className="crt-bezel">
        <div className="crt-meta">
          <span>型号: VDT-1998 // 序列号: 0x88F04</span>
          <span>
            <span className="crt-dot" />
            蓝磷光管 P43
          </span>
        </div>
        <div className="crt-glass">
          <div className="crt-scanlines" />
          <div className="crt-vignette" />
          <CrtHeader prompt={promptFor(pathname)} />
          <main className="crt-main">
            <PageFade />
          </main>
          <CrtFooter pane={paneFor(pathname)} />
          <BootOverlay />
        </div>
        <div className="crt-meta">
          <span>模拟 RGB / 蓝磷光</span>
          <span>亮度 85% || 对比度 100%</span>
        </div>
      </div>
    </div>
  )
}
