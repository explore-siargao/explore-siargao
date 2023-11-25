import { API_URL_USERS } from "@repo/constants"
import { I_User } from "../../../common/types/global"
import { useMutation } from "@tanstack/react-query"

export async function registerUser({
  email,
  password,
  firstName,
  lastName,
  middleName,
  role,
  registrationType,
  address,
  birthdate,
  contactNumber
}: I_User) {
  const res = await fetch(`${API_URL_USERS}`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      firstName,
      lastName,
      middleName,
      role,
      registrationType,
      address,
      birthdate,
      contactNumber
    }),
    headers: {
      "content-type": "application/json",
    },
  })
  return res.json()
}

function useRegister() {
  const query = useMutation({
    mutationFn: (props: I_User) => registerUser(props),
  })
  return query
}

export default useRegister
