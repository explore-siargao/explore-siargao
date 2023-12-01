import { API_AUTH_FORGOT_PASSWORD_VERIFY } from "@/common/constants/api-routes"
import { useMutation } from "@tanstack/react-query"
type ForgotPasswordVerify = {
  email: string
  code: number
  newPassword: string
  confirmPassword: string
}
export async function updatePassword(props: ForgotPasswordVerify) {
  const res = await fetch(`${API_AUTH_FORGOT_PASSWORD_VERIFY}`, {
    method: "POST",
    body: JSON.stringify({
      props,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
  return await res.json()
}

function useForgotPassword() {
  const query = useMutation({
    mutationFn: (props: ForgotPasswordVerify) => updatePassword(props),
  })
  return query
}

export default useForgotPassword
