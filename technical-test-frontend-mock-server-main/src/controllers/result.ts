import { Response, Request } from 'express'
import {
  getFeedbackService,
  getResultService,
  postFeedbackService,
} from '../services/result'
import {
  GetFeedbackResponse,
  GetResultResponse,
  PostFeedbackResponse,
} from '../models/response/result'

export const initResultController = (app: any) => {
  app.get(`${process.env.BASE_API}/result`, (req: Request, res: Response) => {
    const data: GetResultResponse = {
      message:
        'ID is not specified. Please specify the ID on params e.g. localhost:8080/result/1234',
    }
    res.send(data)
  })

  app.get(
    `${process.env.BASE_API}/result/:id`,
    (req: Request, res: Response) => {
      const id = req.params.id
      const [resultData, err] = getResultService(id)
      let data: GetResultResponse
      if (err || !resultData) {
        data = { message: err?.message ?? 'Internal server error' }
        res.status(500).send(data)
        return
      }

      data = {
        message: 'success',
        data: resultData,
      }
      res.send(data)
    }
  )

  app.post(
    `${process.env.BASE_API}/feedback/:id`,
    (req: Request, res: Response) => {
      const id = req.params.id
      const feedback = req?.body?.feedback
      if (!feedback) {
        res.status(400).send({ message: 'feedback is required' })
        return
      }

      const [err] = postFeedbackService(id, feedback)
      let data: PostFeedbackResponse
      if (err) {
        data = { message: err.message }
        res.status(500).send(data)
        return
      }

      data = { message: 'successfully submit feedback' }
      res.send(data)
    }
  )

  app.get(
    `${process.env.BASE_API}/feedback/:id`,
    (req: Request, res: Response) => {
      const [feedback, err] = getFeedbackService(req.params.id)
      let data: GetFeedbackResponse
      if (err) {
        data = { message: err.message }
        res.status(500).send(data)
        return
      }

      data = {
        message: 'success',
        data: { feedback },
      }
      res.send(data)
    }
  )
}
