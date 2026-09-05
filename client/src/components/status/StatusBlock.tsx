import type { ReactNode } from 'react'
import type { LoadState } from '../../hooks/useApi'

type StatusBlockProps<T> = {
  state: LoadState<T>
  children: (data: T) => ReactNode
}

export function StatusBlock<T>({ state, children }: StatusBlockProps<T>) {
  if (state.status === 'loading') {
    return <p className="status">正在加载数据流…</p>
  }
  if (state.status === 'error') {
    return <p className="status status-error">{state.message}</p>
  }
  return <>{children(state.data)}</>
}
