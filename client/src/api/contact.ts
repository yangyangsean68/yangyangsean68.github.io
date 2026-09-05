import type { ContactPayload, ContactResult } from '../types/api'
import { profile } from '../data/site'
import { request } from './http'

export function sendContact(payload: ContactPayload) {
  if (import.meta.env.PROD) {
    const subject = encodeURIComponent(`站点留言 · ${payload.name}`)
    const body = encodeURIComponent(
      `${payload.message}\n\n联系邮箱: ${payload.email}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    return Promise.resolve<ContactResult>({ received: true })
  }

  return request<ContactResult>('/api/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
