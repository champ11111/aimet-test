import { Response, Request } from 'express'
import { getStartService } from '../services/auth'
import { AuthResponse } from '../models/response/auth'

export const initAuthController = (app: any) => {
  app.get(`${process.env.BASE_API}/start`, (_: Request, res: Response) => {
    const [sessionId, err] = getStartService()
    let data: AuthResponse
    if (err || !sessionId) {
      data = {
        message: err?.message ?? 'Internal server error',
      }
      res.status(500).send(data)
      return
    }

    data = {
      message: 'success',
      data: {
        session_id: sessionId,
      },
    }
    res.send(data)
  })
}
