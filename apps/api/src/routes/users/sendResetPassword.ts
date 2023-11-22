import { Request, Response } from 'express'
import { UNKNOWN_ERROR_OCCURRED } from 'constants/'
import { PrismaClient } from '@prisma/client'
const nodeMailer = require('nodemailer')

export const sendResetPassword = async (req: Request, res: Response) => {
  const { email } = req.body
  const prisma = new PrismaClient();
  if (email) {
    try {
      const getUser = await prisma.user.findUnique({
        where:{email:email}
      })
      //   @ts-ignore
      if (getUser !== null) {
        const transporter = nodeMailer.createTransport({
          port: 465, // true for 465, false for other ports
          host: 'smtp.gmail.com',
          auth: {
            user: 'ramillapitan25@gmail.com',
            pass: 'ztivornnbkzmgixx',
          },
          secure: true,
        })
        const mailData = {
          from: 'ramillapitan25@gmail.com', // sender address
          to: email, // list of receivers
          subject: 'Explore-Siargao Reset Password Link',
          text: 'Reset Password',
          html: `<html>
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Reset Password</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
              font-size: 1rem;
              box-sizing: border-box;
            }
            .container {
              align-items: center;
              width: 100%;
            }
            #heading {
              width: 40%;
              height: 60px;
              padding-bottom: 60px;
              border-bottom: black solid;
              border-width: 1px;
              padding-top: 30px;
              margin: 0 auto;
              margin-bottom: 30px;
            }
            #heading #head {
              align-items: center;
              gap: 10px;
            }
            #heading #head h1 {
              font-family: "Courier New", Courier, monospace;
              color: rgb(66, 66, 66);
            }
            #bodyContent {
              width: 40%;
              text-align: left;
              margin: 0 auto;
              margin-top: 30px;
              margin-bottom: 30px;
            }
            #bodyContent #greeting {
              font-size: 2rem;
              font-weight: 500;
              margin-bottom: 30px;
            }
            #bodyContent #greeting {
              font-weight: bolder;
              color: black;
              font-size: 2rem;
              margin-bottom: 30px;
            }
            #bodyContent #greeting #paragraph {
              text-decoration: none;
            }
            #bodyContent #content #remarks {
              margin-top: 30px;
            }
            #footer {
              width: 40%;
              border-top: black solid;
              border-width: 1px;
              margin: 0 auto;
              margin-top: 30px;
              padding-top: 20px;
            }
            #footer #foot {
              width: 100%;
            }
            #footer #foot p {
              font-weight: lighter;
              font-size: 0.8rem;
              color: rgba(52, 52, 52, 0.803);
              margin-top: 10px;
            }
            #footer #foot a {
              text-decoration: none;
              font-size: 0.8rem;
            }
            #footer #foot #credit {
              margin-top: 40px;
            }
      
            @media only screen and (max-width: 925px) {
              /* For tablets: */
              #heading {
                width: 55%;
              }
              #bodyContent {
                width: 55%;
              }
              #footer {
                width: 55%;
              }
            }
      
            @media only screen and (max-width: 768px) {
              /* For tablets: */
              #heading {
                width: 70%;
              }
              #bodyContent {
                width: 70%;
              }
              #footer {
                width: 70%;
              }
            }
      
            @media only screen and (max-width: 480px) {
              /* For mobile phones: */
              #heading {
                width: 90%;
              }
              #bodyContent {
                width: 90%;
              }
              #footer {
                width: 90%;
              }
              #footer #foot {
                width: 100%;
              }
              #footer #foot p {
                text-align: center;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div id="heading">
              <div id="head">
                <h1 style="font-size: 40px">explore-siargao</h1>
              </div>
            </div>
            <div id="bodyContent">
              <div id="content">
                <p id="greeting">
                  Good day ${
                    getUser?.firstName+" "+getUser?.lastName
                  }, You requested the link to reset your
                  password in explore-siargao.
                </p>
                <p>
                  To Reset your password in explore-siargao just click the
                  <a
                    href="http://localhost:3000/reset/password/${getUser?.id}"
                    style="font-weight: bold"
                    >Reset your Password.</a
                  >
                </p>
                <p id="remarks">
                  Thanks, <br />
                  The explore-siargao Team
                </p>
              </div>
            </div>
            <div id="footer">
              <div id="foot">
                <p>
                  <a href="http://localhost:3000">Terms</a> •
                  <a href="http://localhost:3000">Privacy</a> •
                  <a href="http://localhost:3000/login">Sign in to explore-siargao</a>
                </p>
                <div id="credit">
                  <p style="text-align: center">
                    © 2023 explore-siargao | All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
      `,
        }
          res.json({
            error: false,
            item: getUser,
            itemCount: 1,
            message: 'Email Sucessfully Sent',
          })
        }
       else {
        res.json({
          error: false,
          item: 'Email not found',
          itemCount: 1,
          message: null,
        })
      }
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
      res.json({
        error: true,
        items: null,
        itemCount: 0,
        message: message,
      })
    }
  } else {
    res.json({
      error: true,
      items: null,
      itemCount: 0,
      message: 'Required Field cannot be empty',
    })
  }
}
