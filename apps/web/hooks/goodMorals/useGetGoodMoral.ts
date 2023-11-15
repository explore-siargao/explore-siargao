import { useQuery } from "@tanstack/react-query"
import { API_URL_GOOD_MORALS } from "constants/"
import Cookies from "js-cookie"

export async function getgoodMoral(id: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_GOOD_MORALS}/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetGoodMoral(id: string | undefined) {
  const query = useQuery(["good-maral", id], () => getgoodMoral(id), {
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetGoodMoral