import { ZT_ChangePassword, ZT_User } from "contract"
import { API_URL_USERS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

export async function updatePassword({
  _id,
  newPassword,
  confirmPassword,
}: ZT_ChangePassword) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_USERS}/reset/${_id}`, {
    method: "PATCH",
    body: JSON.stringify({
      newPassword,
      confirmPassword,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
  return await res.json()
}

function useResetPassword() {
  const query = useMutation(
    ({ _id, newPassword, confirmPassword }: ZT_ChangePassword) =>
      updatePassword({
        _id,
        newPassword,
        confirmPassword,
      })
  )

  return query
}

export default useResetPassword
