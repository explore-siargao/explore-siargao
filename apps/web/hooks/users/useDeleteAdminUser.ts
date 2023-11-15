import { API_URL_TRANSFER_REQUESTS, API_URL_USERS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

async function deleteAdminUser(id: string) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_USERS}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useDeleteAdminUser() {
  const mutation = useMutation((id: string) => deleteAdminUser(id))

  return mutation
}

export default useDeleteAdminUser
