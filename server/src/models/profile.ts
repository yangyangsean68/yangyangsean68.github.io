export type Skill = {
  name: string
  percent: number
  status: string
}

export type Profile = {
  name: string
  titles: string[]
  role: string
  discipline: string
  currently: string
  tagline: string
  location: string
  email: string
  github: string
  githubLabel: string
  wechat: string
  xiaohongshu: string
  bio: string[]
  skills: Skill[]
}
