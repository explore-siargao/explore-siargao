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
    listingImage,
  } from './styles'
import formatCurrency from '@/common/helpers/formatCurrency'

  export const PaymentEmailConfirmation = (amount:string,image:string,title:string) =>{
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
            Your payment receipt for {APP_NAME}
          </Heading>
          <Text style={paragraph}>
          <span style={{ marginRight: '10px' }}>
          <Img
            src={`${process.env.WEB_URL}/assets/${image}`}
            width="60"
            height="42"
            alt={title}
            style={listingImage}
          /> 
          </span>
          <span style={{ marginRight: '10px' }}>Date: {date}</span><br />
            <span style={{ marginRight: '10px' }}>Amount: {formatCurrency(Number(amount))}</span>
          </Text>
          <Hr style={hr} />
            <Text style={paragraph}>
            "Thank you for choosing to visit us! We appreciate your patronage and hope you had an enjoyable experience. We look forward to welcoming you back soon!"
            </Text>
          <Hr style={hr} />
          <Link href={process.env.WEB_URL} style={reportLink}>
            {APP_NAME}
          </Link>
        </Container>
      </Body>
    </Html>
  
    )}
  
  export default PaymentEmailConfirmation
  