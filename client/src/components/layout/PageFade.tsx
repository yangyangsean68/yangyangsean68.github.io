import { Outlet, useLocation } from 'react-router-dom'

const panes: Record<string, string> = {
  '/': '01/04',
  '/about': '02/04',
  '/projects': '03/04',
  '/contact': '04/04',
}

export function PageFade() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="page-fade">
      <Outlet />
    </div>
  )
}

export function paneFor(pathname: string) {
  if (pathname.startsWith('/projects')) return '03/04'
  return panes[pathname] ?? '01/04'
}
