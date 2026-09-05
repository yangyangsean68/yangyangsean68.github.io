import type { Project } from '../types/api'
import { projects } from '../data/site'
import { request } from './http'

export function getProjects() {
  if (import.meta.env.PROD) {
    return Promise.resolve(projects)
  }
  return request<Project[]>('/api/projects')
}

export function getProject(id: string) {
  if (import.meta.env.PROD) {
    const project = projects.find((item) => item.id === id)
    if (!project) {
      return Promise.reject(new Error('项目不存在'))
    }
    return Promise.resolve(project)
  }
  return request<Project>(`/api/projects/${id}`)
}
