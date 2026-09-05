import { getProject } from '../api/projects'
import { useApi } from './useApi'

export function useProject(id: string | undefined) {
  return useApi(() => {
    if (!id) {
      return Promise.reject(new Error('缺少项目 id'))
    }
    return getProject(id)
  }, [id])
}
