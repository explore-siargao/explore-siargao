import { useQuery } from "@tanstack/react-query"
import { API_URL_DIPLOMAS } from "constants/"
import Cookies from "js-cookie"

export async function getDiploma(id: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_DIPLOMAS}/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetDiploma(id: string | undefined) {
  const query = useQuery(["diploma", id], () => getDiploma(id), {
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetDiploma