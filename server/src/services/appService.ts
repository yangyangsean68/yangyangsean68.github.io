import { profile } from '../data/profile.ts'
import { projects } from '../data/projects.ts'
import type { Project } from '../models/project.ts'

export function getHealth() {
  return {
    status: 'ok',
    message: 'REST 接口运行中',
  }
}

export function getProfile() {
  return profile
}

export function listProjects(): Project[] {
  return projects
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function submitContact(input: {
  name: string
  email: string
  message: string
}) {
  const name = input.name.trim()
  const email = input.email.trim()
  const message = input.message.trim()

  if (!name || !email || !message) {
    throw new Error('姓名、邮箱和内容都不能为空')
  }

  return { received: true }
}
