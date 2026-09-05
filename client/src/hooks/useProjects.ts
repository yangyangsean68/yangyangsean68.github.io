import { getProjects } from '../api/projects'
import { useApi } from './useApi'

export function useProjects() {
  return useApi(getProjects)
}
