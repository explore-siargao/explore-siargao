import { render } from '@react-email/render'
import { EmailService } from '@/common/service/email'
import ForgotPasswordEmail from '@/routes/users/email-template/auth/ForgotPasswordEmail'
import MultiFactorAuth from '@/routes/users/email-template/auth/MultiFactorAuth'
import HostConfirmationEmail from '@/routes/users/email-template/host/HostConfirmationEmail'

export type TSendEmailParams = {
  to: string[] | string
}

export class AuthEmail extends EmailService {
  async sendForgotPasswordEmail(
    sendEmailParams: TSendEmailParams & { magicLink: string }
  ) {
    const { to, magicLink } = sendEmailParams
    const emailHtml = render(ForgotPasswordEmail({ magicLink }))
    const sendEmail = super.sendEmail({
      to: typeof to === 'string' ? [to] : to,
      template: emailHtml,
      subject: 'Forgot Password Link',
    })
    return await sendEmail
  }
  async sendMFA(sendEmailParams: TSendEmailParams & { code: string }) {
    const { to, code } = sendEmailParams
    const emailHtml = render(MultiFactorAuth({ validationCode: code }))
    const sendEmail = super.sendEmail({
      to: typeof to === 'string' ? [to] : to,
      template: emailHtml,
      subject: 'Multi-factor Authentication Code',
    })
    return await sendEmail
  }

  async sendHostConfirmation(sendEmailParams: TSendEmailParams) {
    const { to } = sendEmailParams
    const emailHtml = render(HostConfirmationEmail())
    const sendEmail = super.sendEmail({
      to: typeof to === 'string' ? [to] : to,
      template: emailHtml,
      subject: 'ExploreSiargao Hosting',
    })
    return await sendEmail
  }
}
