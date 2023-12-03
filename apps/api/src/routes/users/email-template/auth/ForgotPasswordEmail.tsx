import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { APP_NAME } from '@repo/constants'
import * as React from 'react'

interface ForgotPasswordEmailProps {
  magicLink: string
}

export const ForgotPasswordEmail = ({
  magicLink,
}: ForgotPasswordEmailProps) => (
  <Html>
    <Head />
    <Preview>Your forgot password link for {APP_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${process.env.WEB_URL}/logo-single.png`}
          width="42"
          height="42"
          alt={APP_NAME}
          style={logo}
        />
        <Heading style={heading}>
          Your forgot password link for {APP_NAME}
        </Heading>
        <Section style={buttonContainer}>
          <Button style={button} href={magicLink}>
            Change Password
          </Button>
        </Section>
        <Text style={paragraph}>
          This link will only be valid for the next 30 minutes.
        </Text>
        <Hr style={hr} />
        <Link href={process.env.WEB_URL} style={reportLink}>
          {APP_NAME}
        </Link>
      </Container>
    </Body>
  </Html>
)

export default ForgotPasswordEmail

const logo = {
  borderRadius: 21,
  width: 42,
  height: 42,
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '560px',
}

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '17px 0 0',
}

const paragraph = {
  margin: '0 0 15px',
  fontSize: '15px',
  lineHeight: '1.4',
  color: '#3c4149',
}

const buttonContainer = {
  padding: '27px 0 27px',
}

const button = {
  backgroundColor: '#8dbfc0',
  borderRadius: '3px',
  fontWeight: '600',
  color: '#fff',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  paddingTop: 11,
  paddingBottom: 11,
  paddingRight: 23,
  paddingLeft: 23,
}

const reportLink = {
  fontSize: '14px',
  color: '#b4becc',
}

const hr = {
  borderColor: '#dfe1e4',
  margin: '42px 0 26px',
}
