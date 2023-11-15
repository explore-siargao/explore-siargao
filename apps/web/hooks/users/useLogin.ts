import { ZT_User } from "contract"

import { useMutation } from "@tanstack/react-query"
import { API_URL_LOGIN } from "constants/"

export async function loginUser({ email, password }: ZT_User) {
  const res = await fetch(`${API_URL_LOGIN}`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  })

  return res.json()
}

function useLoginUser() {
  const query = useMutation(({ email, password }: ZT_User) =>
    loginUser({
      email,
      password,
    })
  )

  return query
}

export default useLoginUser
