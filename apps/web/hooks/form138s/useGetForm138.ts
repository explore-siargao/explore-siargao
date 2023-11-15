import { useQuery } from "@tanstack/react-query"
import { API_URL_FORM138s } from "constants/"
import Cookies from "js-cookie"

export async function getForm138(id: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_FORM138s}/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetForm138(id: string | undefined) {
  const query = useQuery(["form138", id], () => getForm138(id), {
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetForm138