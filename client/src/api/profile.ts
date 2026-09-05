import type { Profile } from '../types/api'
import { profile } from '../data/site'
import { request } from './http'

export function getProfile() {
  if (import.meta.env.PROD) {
    return Promise.resolve(profile)
  }
  return request<Profile>('/api/profile')
}
