import { Response, Request } from 'express'
import { FileService } from '@/common/service/file'
import { REQUIRED_VALUE_EMPTY } from '@/common/constants'

const fileService = new FileService()

export const getAsset = async (req: Request, res: Response) => {
  const download = req.query.download
  const objKey = req.params.objKey
  if (objKey) {
    try {
      const file = await fileService.get({ key: objKey as string })
      if (download) {
        res.send(file)
      } else {
        res.end(file)
      }
    } catch (err: any) {
      res.json({
        error: true,
        message: err.message,
      })
    }
  } else {
    res.json({
      error: true,
      message: REQUIRED_VALUE_EMPTY,
    })
  }
}
