import { API_URL_STUDENTS, API_URL_TRANSFER_REQUESTS } from "constants/"
import { useQuery } from "@tanstack/react-query"
import { ZT_BackendResponse, ZT_TransferRequest } from "contract"
import Cookies from "js-cookie"

type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
  items: ZT_TransferRequest[]
}

export async function getTransferRequestBySchoolId(schoolId: string) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_TRANSFER_REQUESTS}/school/${schoolId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return (await res.json()) as T_DBReturn
}

function useGetTransferRequestBySchoolId(schoolId: string) {
  const query = useQuery(
    ["transfer-requests", schoolId],
    () => getTransferRequestBySchoolId(schoolId),
    {
      refetchOnWindowFocus: false,
    }
  )
  return query
}
export default useGetTransferRequestBySchoolId
