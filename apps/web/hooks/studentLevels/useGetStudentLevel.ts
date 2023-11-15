import { useQuery } from "@tanstack/react-query"
import {API_URL_STUDENT_LEVELS } from "constants/"
import Cookies from "js-cookie"

export async function getStudentLevel(id: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_LEVELS}/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetStudentLevel(id: string | undefined) {
  const query = useQuery(["student-level", id], () => getStudentLevel(id), {
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetStudentLevel