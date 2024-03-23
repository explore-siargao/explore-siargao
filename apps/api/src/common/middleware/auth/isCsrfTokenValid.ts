import { NextFunction, Request, Response } from 'express'
import validateCsrfToken from '@/common/helpers/validateCsrfToken'
import { ResponseService } from '@/common/service/response'
import { USER_NOT_AUTHORIZED } from '@/common/constants'

const response = new ResponseService()

const isCsrfTokenValid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const csrfToken = req.cookies['next-auth.csrf-token']
  const secureCsrfToken = req.cookies['__Host-next-auth.csrf-token']
  if (csrfToken || secureCsrfToken) {
    const isTokenValid = validateCsrfToken(csrfToken ? csrfToken : secureCsrfToken)
    if (isTokenValid === 'valid') {
      next()
    } else {
      res.json(
        response.error({
          message: USER_NOT_AUTHORIZED,
        })
      )
    }
  } else {
    res.json(
      response.error({
        message: USER_NOT_AUTHORIZED,
      })
    )
  }
}

export default isCsrfTokenValid
