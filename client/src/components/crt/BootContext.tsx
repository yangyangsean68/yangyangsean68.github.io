import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type BootContextValue = {
  booting: boolean
  replayBoot: () => void
  finishBoot: () => void
}

const BootContext = createContext<BootContextValue | null>(null)

const STORAGE_KEY = 'sean-crt-booted'

export function BootProvider({ children }: { children: ReactNode }) {
  const [booting, setBooting] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) !== '1',
  )

  const finishBoot = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setBooting(false)
  }, [])

  const replayBoot = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY)
    setBooting(true)
  }, [])

  const value = useMemo(
    () => ({ booting, replayBoot, finishBoot }),
    [booting, replayBoot, finishBoot],
  )

  return <BootContext.Provider value={value}>{children}</BootContext.Provider>
}

export function useBoot() {
  const ctx = useContext(BootContext)
  if (!ctx) {
    throw new Error('useBoot must be used inside BootProvider')
  }
  return ctx
}
