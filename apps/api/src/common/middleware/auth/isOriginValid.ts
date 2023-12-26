import { NextFunction, Request, Response } from 'express'
import { webUrl } from '@/common/config'
import { ResponseService } from '@/common/service/response'

const response = new ResponseService()

const isOriginValid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const origin = req.headers['origin']
  const referer = req.headers['referer']
  if (origin && referer) {
    const isValid = String(referer).startsWith(webUrl) && origin === webUrl
    if (isValid) {
      next()
    } else {
      res.json(
        response.error({
          message: 'You are not authorized to perform this action',
        })
      )
    }
  } else {
    res.json(
      response.error({
        message: 'You are not authorized to perform this action',
      })
    )
  }
}

export default isOriginValid
