import { BaseResponse } from '.'

export type AuthResponse = BaseResponse & {
  data?: {
    session_id: string
  }
}
