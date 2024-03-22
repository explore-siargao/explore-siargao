import { captchaKeySecret } from '@repo/env-vars'

const verifyCaptcha = async (token: string) => {
  const baseUrlPath = 'https://www.google.com/recaptcha/api/siteverify'
  const verify = await fetch(
    `${baseUrlPath}?secret=${captchaKeySecret}&response=${token}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    }
  )
  const result = await verify.json()
  return result.success
}

export default verifyCaptcha
