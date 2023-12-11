import { NextFunction, Request, Response } from 'express'
import validateCsrfToken from '@/common/helpers/validateCsrfToken'

const isCsrfTokenValid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const csrfToken = req.cookies["next-auth.csrf-token"]
  if (csrfToken) {
    const isTokenValid = validateCsrfToken(csrfToken);
    if (isTokenValid === 'valid') {
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

export default isCsrfTokenValid
