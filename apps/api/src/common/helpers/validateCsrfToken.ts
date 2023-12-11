import { nextAuthSecret } from '@/common/config'
import { createHash } from 'crypto'

const validateCsrfToken = (csrfToken: string) => {
  const tokenHashDelimiter = csrfToken.indexOf('|') !== -1 ? '|' : '%7C'

  const [requestToken, requestHash] = csrfToken.split(tokenHashDelimiter)

  const validHash = createHash('sha256')
    .update(`${requestToken}${nextAuthSecret}`)
    .digest('hex')

  return requestHash === validHash ? 'valid' : 'invalid'
}

export default validateCsrfToken
