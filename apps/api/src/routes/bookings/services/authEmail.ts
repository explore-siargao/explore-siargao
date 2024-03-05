import { render } from '@react-email/render'
import { EmailService } from '@/common/service/email'
import PaymentEmailConfirmation from '@/routes/bookings/receipt-template/PaymentEmailConfirmation'
import { APP_NAME } from '@repo/constants'

export type TSendEmailParams = {
  to: string[] | string,
  image:string,
  title:string
}

export class AuthEmail extends EmailService {
  async sendReiptConfirmation(
    sendEmailParams: TSendEmailParams & { amount: string, image:string, title:string}
  ) {
    const { to, amount, image, title } = sendEmailParams
    const emailHtml = render(PaymentEmailConfirmation(amount,image,title))
    const sendEmail = super.sendEmail({
      to: typeof to === 'string' ? [to] : to,
      template: emailHtml,
      subject: `Payment Receipt for ${APP_NAME}`,
    })
    return await sendEmail
  }
}
