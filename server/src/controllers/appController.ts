import type { Request, Response } from 'express'
import {
  getHealth,
  getProfile,
  getProjectById,
  listProjects,
  submitContact,
} from '../services/appService.ts'

export function health(_req: Request, res: Response) {
  res.json({ ok: true, data: getHealth() })
}

export function profile(_req: Request, res: Response) {
  res.json({ ok: true, data: getProfile() })
}

export function projects(_req: Request, res: Response) {
  res.json({ ok: true, data: listProjects() })
}

export function projectById(req: Request, res: Response) {
  const project = getProjectById(req.params.id ?? '')
  if (!project) {
    res.status(404).json({ ok: false, error: '项目不存在' })
    return
  }
  res.json({ ok: true, data: project })
}

export function contact(req: Request, res: Response) {
  try {
    const data = submitContact(req.body as {
      name: string
      email: string
      message: string
    })
    res.status(201).json({ ok: true, data })
  } catch (error) {
    const message = error instanceof Error ? error.message : '提交失败'
    res.status(400).json({ ok: false, error: message })
  }
}
