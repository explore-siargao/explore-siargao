import { UNKNOWN_ERROR_OCCURRED } from 'constants/'
import { keys } from '../../config/keys'
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { PrismaClient } from '@prisma/client'

export const loginAuth = async (req: Request, res: Response, next: NextFunction) => {

    const { email, password } = req.body
    const prisma = new PrismaClient()
    if (email && password) {
      try {
        const user = await prisma.user.findUnique({
            where:{
                email:email,
            }
        })

        if (!user || (user && user.deletedAt)) {
          throw new Error('Account does not exist in our system')
        }
       
        const encryptPassword = CryptoJS.AES.decrypt(
          user.password as string,
          keys.encryptKey as string
        )
        const originalPassword = encryptPassword.toString(CryptoJS.enc.Utf8)
        if (originalPassword !== password) {
          throw new Error('Email or password is invalid')
        } else {
          const otp = Math.floor(100000 + Math.random() * 900000)
          const token = jwt.sign(
            {
              email: user.email,
              role: user.role,
              otp:otp
            },
            keys.signKey as string
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
            userType: user.role,
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
    } else {
      res.json({
        error: true,
        message: 'Required values are missing',
        item: null,
        itemCount: 0,
      })
    }
  
}
