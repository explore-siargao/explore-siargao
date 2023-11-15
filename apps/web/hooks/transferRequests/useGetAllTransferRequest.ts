import { API_URL_TRANSFER_REQUESTS } from "constants/"
import { useQuery } from "@tanstack/react-query"
import { ZT_BackendResponse, ZT_TransferRequest } from "contract"
import Cookies from "js-cookie"

type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
  items: ZT_TransferRequest[]
}

export async function getAllTransferRequest() {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_TRANSFER_REQUESTS}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return (await res.json()) as T_DBReturn
}

function useGetAllTransferRequest() {
  const query = useQuery(["transfer-requests"], () => getAllTransferRequest(), {
    refetchOnWindowFocus: false,
  })
  return query
}
export default useGetAllTransferRequest
