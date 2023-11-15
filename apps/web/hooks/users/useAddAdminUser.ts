import { API_URL_USERS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import { ZT_User } from "contract"
import Cookies from "js-cookie"

export async function addAdminUser(props: ZT_User) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_USERS}`, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useAddAdminUser() {
  const query = useMutation((props: ZT_User) => addAdminUser({...props, userType:"Admin"}))
  return query
}

export default useAddAdminUser