import { ZT_User } from "contract"
import { API_URL_USERS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

export async function updateUser({
  _id,
  name,
  schoolId,
  email,
  password,
  isVerified,
  userType,
  createdAt,
  updatedAt,
}: ZT_User) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_USERS}/${_id}`, {
    method: "PATCH",
    body: JSON.stringify({
      name,
      schoolId,
      email,
      password,
      isVerified,
      userType,
      createdAt,
      updatedAt,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useUpdateUser() {
  const query = useMutation(
    ({
      _id,
      name,
      schoolId,
      email,
      password,
      isVerified,
      userType,
      createdAt,
      updatedAt,
    }: ZT_User) =>
      updateUser({
        _id,
        name,
        schoolId,
        email,
        password,
        isVerified,
        userType,
        createdAt,
        updatedAt,
      })
  )

  return query
}

export default useUpdateUser
