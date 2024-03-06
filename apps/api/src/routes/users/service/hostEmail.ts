import { render } from '@react-email/render'
import { EmailService } from '@/common/service/email'
import ForgotPasswordEmail from '@/routes/users/email-template/auth/ForgotPasswordEmail'
import MultiFactorAuth from '@/routes/users/email-template/auth/MultiFactorAuth'
import BecomeHostEmailConfirmation from '@/routes/users/email-template/host/BecomeHostEmailConfirmation'

export type TSendEmailParams = {
  to: string[] | string
}

export class HostEmail extends EmailService {
  async sendHostConfirmation(sendEmailParams: TSendEmailParams) {
    const { to } = sendEmailParams
    const emailHtml = render(BecomeHostEmailConfirmation())
    const sendEmail = super.sendEmail({
      to: typeof to === 'string' ? [to] : to,
      template: emailHtml,
      subject: 'ExploreSiargao Hosting',
    })
    return await sendEmail
  }
}
