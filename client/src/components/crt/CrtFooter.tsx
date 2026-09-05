type CrtFooterProps = {
  pane: string
}

export function CrtFooter({ pane }: CrtFooterProps) {
  return (
    <footer className="crt-footer">
      <span className="ready">系统就绪 | 60Hz | [正常]</span>
      <span className="muted">终端 · 窗格 {pane} [活动] · TTY: /dev/pts/0</span>
    </footer>
  )
}
