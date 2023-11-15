import { API_URL_STUDENT_REQUEST_APPROVALS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

async function cancelRequest(id: string) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_REQUEST_APPROVALS}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useCancelRequest() {
  const mutation = useMutation((id: string) => cancelRequest(id))

  return mutation
}

export default useCancelRequest
