import { Session, SessionData } from './types'

class SessionStorage {
  data: Session

  constructor() {
    this.data = {}
  }

  set(id: string, value: SessionData) {
    this.data = {
      ...this.data,
      [id]: value,
    }
  }

  get(id: string): SessionData {
    return this.data[id]
  }

  clear() {
    this.data = {}
  }
}

const session = new SessionStorage()

export default session
