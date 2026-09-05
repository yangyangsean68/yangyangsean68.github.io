import { useEffect, useState } from 'react'

export type LoadState<T> =
  | { status: 'loading' }
  | { status: 'ok'; data: T }
  | { status: 'error'; message: string }

/** 通用数据请求 Hook。稳定函数可只传 load；依赖变化时再传 deps。 */
export function useApi<T>(load: () => Promise<T>, deps?: unknown[]) {
  const [state, setState] = useState<LoadState<T>>({ status: 'loading' })

  useEffect(() => {
    let cancelled = false
    setState({ status: 'loading' })

    load()
      .then((data) => {
        if (!cancelled) setState({ status: 'ok', data })
      })
      .catch((error: unknown) => {
        if (cancelled) return
        const message = error instanceof Error ? error.message : '请求失败'
        setState({ status: 'error', message })
      })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps ?? [load])

  return state
}
