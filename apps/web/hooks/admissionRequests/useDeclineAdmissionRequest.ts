import { API_URL_ADMISSION_REQUESTS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

async function declineAdmissionRequest(id: string) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_ADMISSION_REQUESTS}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useDeclineAdmissionRequest() {
  const mutation = useMutation((id:string) => declineAdmissionRequest(id))

  return mutation
}

export default useDeclineAdmissionRequest
