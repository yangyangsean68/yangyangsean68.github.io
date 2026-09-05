import type { HealthData } from '../types/api'
import { request } from './http'

/** 对应后端 GET /api/health */
export function getHealth() {
  return request<HealthData>('/api/health')
}
