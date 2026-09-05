import { useState, type FormEvent } from 'react'
import { sendContact } from '../api/contact'
import { StatusBlock } from '../components/status/StatusBlock'
import { useProfile } from '../hooks/useProfile'

async function copyText(value: string) {
  await navigator.clipboard.writeText(value)
}

export function ContactPage() {
  const profile = useProfile()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setResult(null)
    setError(null)

    try {
      await sendContact({ name, email, message })
      setResult('[正常] 消息已收到')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setError(err instanceof Error ? err.message : '发送失败')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="contact-grid">
      <section className="pane contact-channels">
        <div className="pane-title">
          <span>+--- 目录 // 联系通道 [路径: /联系] ---+</span>
          <span className="ready">[链路打开]</span>
        </div>
        <div className="pane-body">
          <StatusBlock state={profile}>
            {(data) => (
              <>
                <p>连接已就绪。选一条通道，或在下方发送消息。</p>
                <div className="channel cursor-target">
                  <span>
                    <span className="glow">01 微信:</span> {data.wechat}
                  </span>
                  <button
                    type="button"
                    className="bracket-btn cursor-target"
                    onClick={() => copyText(data.wechat)}
                  >
                    [ 复制 ]
                  </button>
                </div>
                <div className="channel cursor-target">
                  <span>
                    <span className="glow">02 GitHub:</span> {data.githubLabel}
                  </span>
                  <a
                    className="bracket-btn cursor-target"
                    href={data.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    [ 打开 ]
                  </a>
                </div>
                <div className="channel cursor-target">
                  <span>
                    <span className="glow">03 小红书:</span> {data.xiaohongshu}
                  </span>
                  <button
                    type="button"
                    className="bracket-btn cursor-target"
                    onClick={() => copyText(data.xiaohongshu)}
                  >
                    [ 复制 ]
                  </button>
                </div>
                <div className="channel cursor-target">
                  <span>
                    <span className="glow">04 邮箱:</span> {data.email}
                  </span>
                  <a className="bracket-btn cursor-target" href={`mailto:${data.email}`}>
                    [ 发邮件 ]
                  </a>
                </div>
              </>
            )}
          </StatusBlock>

          <div className="pane-title" style={{ marginTop: 16 }}>
            <span>+--- 发送缓冲 // sean@inbox:~$ send ---+</span>
          </div>
          <form onSubmit={onSubmit}>
            <div className="term-field">
              <label>姓名 :</label>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="怎么称呼你"
                required
              />
            </div>
            <div className="term-field">
              <label>邮箱 :</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="term-field">
              <label>内容 :</label>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="想说的话写在这里…"
                required
              />
            </div>
            <button className="bracket-btn cursor-target" type="submit" disabled={submitting}>
              {submitting ? '[ 发送中 ]' : '[ 发送消息 ]'}
              <span className="cursor" />
            </button>
            {result ? <p className="status status-ok">{result}</p> : null}
            {error ? <p className="status status-error">{error}</p> : null}
          </form>
        </div>
      </section>

      <section className="pane">
        <div className="pane-title">
          <span>+--- 通信链路 // 频率雷达 ---+</span>
          <span>[只读]</span>
        </div>
        <div className="pane-body radar">
          <p className="ready">[ 信号已锁定 ]</p>
          <pre>{`      .---.                .-''''-.
     /     \\             .'        '.
    |   01  |           /     /\\     \\
     \\     /           |     /  \\     |
      '---'            |    / /\\ \\    |
                       |     \\  /     |
     [RX: 98.4dB]       \\     \\/     /      [TX: 99.1%]
                         '-....-'`}</pre>
          <p className="muted">极化: 右旋圆极化 | 误码率 &lt; 1.0E-9</p>
          <div className="identity">
            <div>
              <span>节点:</span>
              <span>太平洋西北电网</span>
            </div>
            <div>
              <span>指纹:</span>
              <span className="glow">4B92:C81F:72DE:9001</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
