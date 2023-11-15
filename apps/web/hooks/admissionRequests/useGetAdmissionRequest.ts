import { useQuery } from "@tanstack/react-query"
import { API_URL_ADMISSION_REQUESTS } from "constants/"
import Cookies from "js-cookie"

export async function getAdmissionRequest(id: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_ADMISSION_REQUESTS}/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetAdmissionRequest(id: string | undefined) {
  const query = useQuery(["admission-requests", id], () => getAdmissionRequest(id), {
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetAdmissionRequest