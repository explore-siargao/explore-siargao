import { NextFunction, Request, Response } from 'express'
import { nodeEnv, webUrl } from '@/common/config'
import { ENV_PROD } from '@/common/constants';

const isOriginValid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const origin = req.headers['origin'];
  const referer = req.headers['referer']
  if (origin && referer) {
    const isValid = String(referer).startsWith(webUrl) && origin === webUrl;
    if (isValid) {
      next()
    } else {
      res.json({
        error: true,
        item: null,
        message: `You are not authorized to perform this action`,
      })
    }
  } else {
    res.json({
      error: true,
      item: null,
      message: `You are not authorized to perform this action`,
    })
  }
}

export default isOriginValid
