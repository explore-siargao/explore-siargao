import { useQuery } from "@tanstack/react-query"
import {API_URL_STUDENTS } from "constants/"
import Cookies from "js-cookie"

export async function getStudent(id: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENTS}/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetStudent(id: string | undefined) {
  const query = useQuery(["students", id], () => getStudent(id), {
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetStudent