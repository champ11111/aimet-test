import { BaseResponse } from '.'

export type GetResultResponse = BaseResponse & {
  data?: ResultData
}

export type ResultData = {
  result_ai_status: Status
  result_ai_severity_level: SeverityLevel | null
}

export type SeverityLevel = 'SEVERE' | 'LOW'

export type Status = 'PROCESSING' | 'FINISHED'

export type PostFeedbackResponse = BaseResponse

export type GetFeedbackResponse = BaseResponse & {
  data?: {
    feedback: string | null
  }
}
