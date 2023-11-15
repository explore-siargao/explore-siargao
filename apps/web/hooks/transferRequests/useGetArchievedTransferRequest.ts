import { useQuery } from "@tanstack/react-query"
import { API_URL_TRANSFER_REQUESTS } from "constants/"
import Cookies from "js-cookie"

export async function getArchievedTransferRequest(
  id: string | undefined,
  lrnOrName: string | undefined
) {
  const token = Cookies.get("tfl")
  const res = await fetch(
    `${API_URL_TRANSFER_REQUESTS}/archieved/${id}/${lrnOrName}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return await res.json()
}

function useGetArchievedTransferRequest(
  id: string | undefined,
  lrnOrName: string | undefined
) {
  const query = useQuery(
    ["student-request-approval", id],
    () => getArchievedTransferRequest(id, lrnOrName),
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
    }
  )
  return query
}
export default useGetArchievedTransferRequest
