import { useMutation } from "@tanstack/react-query"
import { API_URL_USERS } from "constants/"
import { ZT_User } from "contract"
import Cookies from "js-cookie"

export async function sendMail({ email }: ZT_User) {
  const tlf = Cookies.get("tfl")
  const res = await fetch(`${API_URL_USERS}/email`, {
    method: "POST",
    body: JSON.stringify({
      email,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
  return res.json()
}

function useSendMail() {
  const query = useMutation(({ email }: ZT_User) => sendMail({ email }))
  return query
}

export default useSendMail
