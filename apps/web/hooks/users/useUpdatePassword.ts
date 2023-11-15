import { ZT_ChangePassword, ZT_User } from "contract"
import { API_URL_USERS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

export async function updatePassword({
  _id,
  currentPassword,
  newPassword,
  confirmPassword
}: ZT_ChangePassword) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_USERS}/password/${_id}`, {
    method: "PATCH",
    body: JSON.stringify({
     currentPassword,
     newPassword,
     confirmPassword
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useUpdatePassword() {
  const query = useMutation(
    ({
      _id,
      currentPassword,
      newPassword,
      confirmPassword
    }: ZT_ChangePassword) =>
      updatePassword({
        _id,
        currentPassword,
        newPassword,
        confirmPassword
      })
  )

  return query
}

export default useUpdatePassword
