import { useQuery } from "@tanstack/react-query"
import { API_URL_TRANSFER_REQUESTS } from "constants/"
import Cookies from "js-cookie"

export async function getTransferRequest(id: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_TRANSFER_REQUESTS}/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetTransferRequest(id: string | undefined) {
  const query = useQuery(
    ["transfer-request", id],
    () => getTransferRequest(id),
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
    }
  )
  return query
}
export default useGetTransferRequest
