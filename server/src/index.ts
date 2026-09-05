import cors from 'cors'
import express from 'express'
import { config } from './config/env.ts'
import { errorHandler, notFound } from './middleware/errorHandler.ts'
import { apiRouter } from './routes/api.ts'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', apiRouter)
app.use(notFound)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`REST API listening on http://localhost:${config.port}`)
})
