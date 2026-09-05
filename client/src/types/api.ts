export type ApiSuccess<T> = {
  ok: true
  data: T
}

export type ApiFailure = {
  ok: false
  error: string
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure

export type HealthData = {
  status: string
  message: string
}

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

export type Project = {
  id: string
  title: string
  summary: string
  description: string
  tags: string[]
  year: number
  status: 'ACTIVE' | 'STANDBY'
  schematicLabel: string
  schematic: string
  pid: string
  mode: string
  url?: string
}

export type ContactPayload = {
  name: string
  email: string
  message: string
}

export type ContactResult = {
  received: boolean
}
