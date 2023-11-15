import { useQuery } from "@tanstack/react-query"
import {API_URL_SCHOOLS } from "constants/"
import Cookies from "js-cookie"

export async function getSchool(id: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_SCHOOLS}/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetSchool(id: string | undefined) {
  const query = useQuery(["school", id], () => getSchool(id), {
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetSchool