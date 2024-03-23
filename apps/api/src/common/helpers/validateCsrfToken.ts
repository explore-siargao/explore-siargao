import { createHash } from 'crypto'
import { NEXTAUTH_SECRET } from '../constants/ev'

const validateCsrfToken = (csrfToken: string) => {
  const tokenHashDelimiter = csrfToken.indexOf('|') !== -1 ? '|' : '%7C'

  const [requestToken, requestHash] = csrfToken.split(tokenHashDelimiter)

  const validHash = createHash('sha256')
    .update(`${requestToken}${NEXTAUTH_SECRET}`)
    .digest('hex')

  return requestHash === validHash ? 'valid' : 'invalid'
}

export default validateCsrfToken
