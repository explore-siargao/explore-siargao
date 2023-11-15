import { useQuery } from "@tanstack/react-query"
import {API_URL_SCHOOLS } from "constants/"
import Cookies from "js-cookie"

export async function getApiKey(id : string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_SCHOOLS}/api/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetApiKeyBySchool(id: string | undefined) {
  const query = useQuery(["school", id], () => getApiKey(id), {
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetApiKeyBySchool