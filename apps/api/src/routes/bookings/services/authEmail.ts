import { render } from '@react-email/render'
import { EmailService } from '@/common/service/email'
import EmailConfirmation from '@/routes/bookings/receipt-template/EmailConfirmation'
import { APP_NAME } from '@repo/constants'

export type TSendEmailParams = {
  to: string[] | string
}

export class AuthEmail extends EmailService {
  async sendReiptConfirmation(
    sendEmailParams: TSendEmailParams & { amount: string }
  ) {
    const { to, amount } = sendEmailParams
    const emailHtml = render(EmailConfirmation(amount))
    const sendEmail = super.sendEmail({
      to: typeof to === 'string' ? [to] : to,
      template: emailHtml,
      subject: `Payment Receipt for ${APP_NAME}`,
    })
    return await sendEmail
  }
}
