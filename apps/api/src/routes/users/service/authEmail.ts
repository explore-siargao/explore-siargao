import { render } from '@react-email/render';
import { EmailService } from '@/common/service/email'
import ForgotPasswordEmail from '@/routes/users/email-template/auth/ForgotPasswordEmail';

export type TSendEmailParams = {
  to: string[] | string;
}

export class AuthEmail extends EmailService {
  async sendForgotPasswordEmail(sendEmailParams: TSendEmailParams & { magicLink: string }) {
    const { to, magicLink } = sendEmailParams;
    const emailHtml = render(ForgotPasswordEmail({ magicLink }));
    const sendEmail = super.sendEmail({
      to: typeof to === 'string' ? [to] : to,
      template: emailHtml,
      subject: 'Forgot Password Link',
    });
    return await sendEmail;
  }
}
