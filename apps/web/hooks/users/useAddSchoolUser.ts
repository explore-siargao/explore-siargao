import { API_URL_USERS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import { ZT_User } from "contract"
import Cookies from "js-cookie"

export async function addSchoolUser(props: ZT_User) {
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

function useAddSchoolUser() {
  const query = useMutation((props: ZT_User) => addSchoolUser({...props, userType:"School"}))
  return query
}

export default useAddSchoolUser