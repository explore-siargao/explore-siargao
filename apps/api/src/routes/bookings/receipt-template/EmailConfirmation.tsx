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
  import {
    buttonContainer,
    button,
    container,
    heading,
    hr,
    logo,
    main,
    paragraph,
    reportLink,
  } from './styles'
  
  
  export const EmailConfirmation = (amount:string) =>{
    const date = new Date().toLocaleDateString('en-US',{month:"long", day:"numeric", year:"numeric"})
    return(
    <Html>
      <Head />
      <Preview>Payment Receipt for {APP_NAME}</Preview>
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
            Your Payment Receipt for {APP_NAME}
          </Heading>
         
          <Text style={paragraph}>
            Date: {date}
          </Text>
          <Text style={paragraph}>
            Amount:	₱{amount}
          </Text>
          <Hr style={hr} />
          <Link href={process.env.WEB_URL} style={reportLink}>
            {APP_NAME}
          </Link>
        </Container>
      </Body>
    </Html>
  
    )}
  
  export default EmailConfirmation
  