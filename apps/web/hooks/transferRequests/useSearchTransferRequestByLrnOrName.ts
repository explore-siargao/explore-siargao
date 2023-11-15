import { useQuery } from "@tanstack/react-query"
import {API_URL_STUDENT_SCHOOLS, API_URL_TRANSFER_REQUESTS } from "constants/"
import Cookies from "js-cookie"

export async function getTransferRequestByLrnOrName(id: string | undefined, lrnOrName: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_TRANSFER_REQUESTS}/search/${id}/${lrnOrName}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useSearchTransferRequestByLrnOrName(id: string | undefined, lrnOrName: string | undefined) {
  const query = useQuery(["transfer-requests", id], () => getTransferRequestByLrnOrName(id,lrnOrName), {
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useSearchTransferRequestByLrnOrName