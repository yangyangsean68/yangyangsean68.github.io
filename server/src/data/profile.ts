import type { Profile } from '../models/profile.ts'

export const profile: Profile = {
  name: 'Sean',
  titles: ['系统架构', '逆向工程', 'UNIX 玩家'],
  role: '学生 / 开发者',
  discipline: '系统与底层方向',
  currently: '正在打磨个人作品',
  tagline: '作品集在线 · 作品 / 联系',
  location: '中国',
  email: 'sean@terminal.dev',
  github: 'https://github.com/yangyangsean68',
  githubLabel: 'github.com/yangyangsean68',
  wechat: '@sean',
  xiaohongshu: '@sean',
  bio: [
    '我在学习和构建 Web 与系统相关的东西：把页面、接口、数据拆清楚，少一层不必要的抽象，多一点能跑起来的作品。',
  ],
  skills: [
    { name: 'Linux', percent: 95, status: '最优' },
    { name: 'Rust', percent: 82, status: '稳定' },
    { name: 'React', percent: 80, status: '常用' },
    { name: 'Docker', percent: 74, status: '已加载' },
  ],
}
