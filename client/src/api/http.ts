import type { ApiResponse } from '../types/api'

/**
 * 统一的 REST 请求入口。
 * 页面不要直接 fetch，一律走这里，方便以后加 token、超时、错误处理。
 */
export async function request<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(path, {
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    ...init,
  })

  const body = (await response.json()) as ApiResponse<T>

  if (!response.ok || !body.ok) {
    const message = !body.ok ? body.error : `HTTP ${response.status}`
    throw new Error(message)
  }

  return body.data
}
