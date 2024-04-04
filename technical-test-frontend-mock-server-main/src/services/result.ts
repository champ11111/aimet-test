import session from '../storages'
import { ResultData, SeverityLevel } from '../models/response/result'

const randomSeverityLevel = (): SeverityLevel => {
  return Math.floor(Math.random() * 2) ? 'SEVERE' : 'LOW'
}

export const getResultService = (
  id: string
): [ResultData | null, Error | null] => {
  // If id is not in session, return error message
  if (!session.get(id)) {
    return [null, new Error('Session ID not found')]
  }

  const { processingTime, startTime, status } = session.get(id)
  const current = new Date().getTime()
  const start = startTime.getTime()

  if (status === 'PROCESSING' && current > start + processingTime * 1000) {
    session.set(id, {
      status: 'FINISHED',
      severityLevel: randomSeverityLevel(),
      startTime,
      processingTime,
    })
  }

  return [
    {
      result_ai_status: session.get(id).status,
      result_ai_severity_level: session.get(id).severityLevel,
    },
    null,
  ]
}

export const postFeedbackService = (
  id: string,
  feedback: string
): [Error | null] => {
  if (!session.get(id)) {
    return [new Error('Session ID not found')]
  }

  session.set(id, {
    ...session.get(id),
    feedback,
  })
  return [null]
}

export const getFeedbackService = (
  id: string
): [string | null, Error | null] => {
  if (!session.get(id)) {
    return [null, new Error('Session ID not found')]
  }

  return [session.get(id).feedback ?? null, null]
}
