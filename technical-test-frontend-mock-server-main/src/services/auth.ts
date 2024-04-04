import { v4 as uuidv4 } from 'uuid'
import session from '../storages'

export const getStartService = (): [string | null, Error | null] => {
  const uuid = uuidv4()
  const randomProcessingTime = Math.floor(Math.random() * 7) + 6

  session.set(uuid, {
    severityLevel: null,
    status: 'PROCESSING',
    startTime: new Date(),
    processingTime: randomProcessingTime,
  })

  console.log('session', session)
  return [uuid, null]
}
