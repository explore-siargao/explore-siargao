import { API_URL_USERS } from "constants/"
import { I_User } from "../../types/global"
import { useMutation } from "@tanstack/react-query"

export async function loginUser({
  email,
  password,
}: I_User) {
  const res = await fetch(`${API_URL_USERS}/login`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      "content-type": "application/json",
    },
  })
  return res.json()
}

function useLogin() {
  const query = useMutation({
    mutationFn: (props: I_User) => loginUser(props),
  })
  return query
}

export default useLogin
