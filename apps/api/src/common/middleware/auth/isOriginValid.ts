import { NextFunction, Request, Response } from 'express'
import { webUrl } from '@/common/config'
import { ResponseService } from '@/common/service/response'
import { USER_NOT_AUTHORIZED } from '@/common/constants'

const response = new ResponseService()

const isOriginValid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const origin = req.headers['origin']
  const referer = req.headers['referer']
  const proxy = req.headers['x-forwarded-host']
  if ((origin && referer) || proxy) {
    const isValid =
      (String(referer).startsWith(webUrl) && origin === webUrl) ||
      webUrl.includes(proxy as string)
    if (isValid) {
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

export default isOriginValid
