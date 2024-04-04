import { initAuthController } from './auth'
import { initResultController } from './result'

export const initController = (app: any) => {
  initAuthController(app)
  initResultController(app)
}
