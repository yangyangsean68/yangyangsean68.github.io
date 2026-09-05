import { useEffect, useState } from 'react'
import { useBoot } from './BootContext'

const TOTAL = 44

function bar(percent: number) {
  const fill = Math.floor((percent / 100) * TOTAL)
  return `[${'|'.repeat(fill)}${'.'.repeat(TOTAL - fill)}]`
}

export function BootOverlay() {
  const { booting, finishBoot } = useBoot()
  const [percent, setPercent] = useState(18)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!booting) return
    setPercent(18)
    setLeaving(false)

    const timer = window.setInterval(() => {
      setPercent((current) => {
        if (current >= 100) {
          window.clearInterval(timer)
          return 100
        }
        return current + 4
      })
    }, 90)

    return () => window.clearInterval(timer)
  }, [booting])

  useEffect(() => {
    if (!booting || percent < 100) return
    const hide = window.setTimeout(() => setLeaving(true), 250)
    const done = window.setTimeout(finishBoot, 650)
    return () => {
      window.clearTimeout(hide)
      window.clearTimeout(done)
    }
  }, [booting, percent, finishBoot])

  if (!booting) return null

  return (
    <div className={leaving ? 'boot is-leaving' : 'boot'}>
      <div className="boot-pane">
        <div className="pane-title">
          <span>+--- SEAN // 硬件子系统初始化 [只读] -------------------+</span>
          <span className="ready">显存: 64MB 正常</span>
        </div>
        <div className="pane-body">
          <pre className="ascii">{`  ____  _____    _    _   _
 / ___|| ____|  / \\  | \\ | |
 \\___ \\|  _|   / _ \\ |  \\| |
  ___) | |___ / ___ \\| |\\  |
 |____/|_____/_/   \\_\\_| \\_|`}</pre>
          <div className="boot-line ready">
            <span>&gt; 电源接通</span>
            <span className="muted">[ +0.0001s ]</span>
          </div>
          <div className="boot-line glow">
            <span>&gt; 正在调谐… 模拟扫描束已同步</span>
            <span className="muted">[ 60Hz ]</span>
          </div>
          <div className="boot-line glow">
            <span>&gt; 信号锁定</span>
            <span className="ready">[ 正常 ]</span>
          </div>
          <p className="muted">[初始化] 正在挂载内核镜像与驱动… 完成</p>
          <div className="pane-title" style={{ margin: '12px 0 8px', border: '1px solid var(--border)' }}>
            <span>正在加载用户环境</span>
            <span className="glow">{percent}%</span>
          </div>
          <div className="skill-bar">
            <span>{bar(percent)}</span>
            <span className="ready">内存: 44.8KB/64.0KB</span>
          </div>
          <p>
            <span className="glow">user@sean:~$</span> ./开机.sh --磷光=最大
            <span className="cursor" />
          </p>
          <div className="diag-grid">
            <div>
              <div className="muted">扫描束</div>
              <strong className="ready">525 行</strong>
            </div>
            <div>
              <div className="muted">色度副载波</div>
              <strong className="glow">3.579545 MHz</strong>
            </div>
            <div>
              <div className="muted">管压</div>
              <strong className="ready">+18.5 kV [额定]</strong>
            </div>
            <div>
              <div className="muted">自检</div>
              <strong className="glow">[ 通过 ]</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
