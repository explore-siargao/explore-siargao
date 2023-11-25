import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { randomInt } from 'crypto'
import { encryptKey, signKey } from '@/common/config'
import { UNKNOWN_ERROR_OCCURRED } from '@/common/constants'

export const loginAuth = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const prisma = new PrismaClient()
     const randomNumber = randomInt(100000,999999)
      try {
        const user = await prisma.user.findUnique({
            where:{
                email:email,
            }
        })

        if (!user || user?.deletedAt) {
          throw new Error('Account does not exist in our system')
        }
       
        const encryptPassword = CryptoJS.AES.decrypt(
          user?.password as string,
          encryptKey
        )
        const originalPassword = encryptPassword.toString(CryptoJS.enc.Utf8)
        if (originalPassword !== password) {
          throw new Error('Email or password is invalid')
        }else{
          const token = jwt.sign(
            {
              email: user?.email,
              role: user?.role,
              otp:randomNumber
            },
            signKey
          )
          if (res.locals.user) {
            delete res.locals.user
          }
         
          res.json({
            error: false,
            item: {
              token: token
            },
            itemCount: 1,
            message: null,
            userType: user?.role,
          })
        }
      } catch (err: any) {
        const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
        res.json({
          error: true,
          message: message,
          item: null,
          itemCount: 0,
        })
      }
  
}
