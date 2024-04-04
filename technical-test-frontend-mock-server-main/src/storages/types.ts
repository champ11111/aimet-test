import { SeverityLevel, Status } from '../models/response/result'

export type Session = Record<string, any>

export type SessionData = {
  severityLevel: SeverityLevel | null
  status: Status
  startTime: Date
  processingTime: number
  feedback?: string
  // time: number // 1, 2, ....
}
