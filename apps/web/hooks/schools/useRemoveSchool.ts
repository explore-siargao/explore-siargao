import { API_URL_SCHOOLS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

async function removeSchool(id: string) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_SCHOOLS}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useRemoveSchool() {
  const mutation = useMutation((id: string) => removeSchool(id))

  return mutation
}

export default useRemoveSchool
