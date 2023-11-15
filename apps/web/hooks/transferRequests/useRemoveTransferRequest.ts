import { API_URL_TRANSFER_REQUESTS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

async function removeTransferRequest(id: string) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_TRANSFER_REQUESTS}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useRemoveTransferRequest() {
  const mutation = useMutation((id: string) => removeTransferRequest(id))

  return mutation
}

export default useRemoveTransferRequest
