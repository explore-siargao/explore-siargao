import {
  AdminInitiateAuthCommand,
  AdminInitiateAuthCommandInput,
  AdminInitiateAuthCommandOutput,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
import crypto from 'crypto-js'

const clientId = process.env.COGNITO_CLIENT_ID || "";
const accessKey = process.env.ENCRYPT_KEY || "";
const poolId = process.env.COGNITO_POOL_ID || "";
const awsRegion = process.env.COGNITO_REGION || "";

export async function authentication({ email, password }: { email: string, password: string }) {
  const cognitoProviderClient = new CognitoIdentityProviderClient();
  const secretHash = generateSecret(email);
  const payload: AdminInitiateAuthCommandInput = {
    AuthFlow: "ADMIN_USER_PASSWORD_AUTH",
    ClientId: clientId,
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
      SECRET_HASH: secretHash,
    },
    UserPoolId: poolId,
  }
  const command = new AdminInitiateAuthCommand(payload);
  // const response: AdminInitiateAuthCommandOutput = await CognitoIdentityProviderClient.send(command);
}

function generateSecret(username: string) {
  return crypto.enc.Base64.stringify(
    crypto.HmacSHA256(username + clientId, crypto.enc.Utf8.parse(accessKey))
  );
}