import { StatusBlock } from '../components/status/StatusBlock'
import { useProfile } from '../hooks/useProfile'
import { asciiBar } from '../utils/asciiBar'

export function AboutPage() {
  const profile = useProfile()

  return (
    <div className="about-grid">
      <section className="pane about-bio">
        <div className="pane-title">
          <span>[*] 窗格 01: 身份档案 [只读]</span>
          <span>UTF-8</span>
        </div>
        <div className="pane-body">
          <pre className="ascii">{`  ____  _____    _    _   _
 / ___|| ____|  / \\  | \\ | |
 \\___ \\|  _|   / _ \\ |  \\| |
  ___) | |___ / ___ \\| |\\  |
 |____/|_____/_/   \\_\\_| \\_|`}</pre>
          <StatusBlock state={profile}>
            {(data) => (
              <>
                <p className="glow">$ cat /etc/身份.conf</p>
                <div className="identity">
                  <div>
                    <span>角色:</span>
                    <span className="glow">{data.role}</span>
                  </div>
                  <div>
                    <span>方向:</span>
                    <span>{data.discipline}</span>
                  </div>
                  <div>
                    <span>近况:</span>
                    <span className="ready">{data.currently}</span>
                  </div>
                  <div>
                    <span>地点:</span>
                    <span>{data.location}</span>
                  </div>
                </div>
                {data.bio.map((paragraph) => (
                  <p key={paragraph} className="muted">
                    {paragraph}
                  </p>
                ))}
              </>
            )}
          </StatusBlock>
        </div>
      </section>

      <section className="pane about-profile">
        <div className="pane-title">
          <span>+--- 头像位 // 视频流_0 ---+</span>
          <span className="err">[离线]</span>
        </div>
        <div className="noise">
          <div className="no-signal">
            <pre className="ascii muted">{`+------------------------------+
|  X   .   .   .   .   .   X   |
|      \\   无头像     /       |
+--------------v---------------+`}</pre>
            <div className="no-signal-badge">[ 无信号 ]</div>
            <p className="muted">
              画面: 空
              <br />
              光学传感器: <span className="err">离线</span>
            </p>
          </div>
        </div>
      </section>

      <section className="pane about-log">
        <div className="pane-title">
          <span>+--- 执行日志 // 实时输出 ---+</span>
          <span className="ready">推流中</span>
        </div>
        <div className="pane-body">
          <p className="log-line">
            <span className="glow">[09:14:02]</span> 内核: 控制组接口初始化… [正常]
          </p>
          <p className="log-line">
            <span className="glow">[09:14:03]</span> 守护进程: 同步仓库 sean/personal_core
          </p>
          <p>
            <span className="glow">root@sean:~$</span> echo $状态
            <span className="cursor" />
          </p>
        </div>
      </section>

      <section className="pane about-skills">
        <div className="pane-title">
          <span>+--- 系统遥测 // 技能矩阵 ---+</span>
          <span>[窗格_03]</span>
        </div>
        <div className="pane-body">
          <p className="muted">已分配能力 --格式=原始百分比</p>
          <StatusBlock state={profile}>
            {(data) => (
              <>
                {data.skills.map((skill, index) => (
                  <div className="skill" key={skill.name}>
                    <div className="skill-head">
                      <span>
                        {String(index + 1).padStart(2, '0')}: {skill.name}
                      </span>
                      <span className="glow">{skill.percent}%</span>
                    </div>
                    <div className="skill-bar">
                      <span>{asciiBar(skill.percent)}</span>
                      <span className="ready">{skill.status}</span>
                    </div>
                  </div>
                ))}
              </>
            )}
          </StatusBlock>
        </div>
      </section>
    </div>
  )
}
