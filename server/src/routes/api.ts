import { Router } from 'express'
import {
  contact,
  health,
  profile,
  projectById,
  projects,
} from '../controllers/appController.ts'

export const apiRouter = Router()

apiRouter.get('/health', health)
apiRouter.get('/profile', profile)
apiRouter.get('/projects', projects)
apiRouter.get('/projects/:id', projectById)
apiRouter.post('/contact', contact)
