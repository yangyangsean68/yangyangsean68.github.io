import { getProfile } from '../api/profile'
import { useApi } from './useApi'

export function useProfile() {
  return useApi(getProfile)
}
