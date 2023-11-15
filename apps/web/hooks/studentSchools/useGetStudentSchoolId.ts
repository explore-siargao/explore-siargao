import { useQuery } from "@tanstack/react-query"
import {API_URL_STUDENT_SCHOOLS } from "constants/"
import Cookies from "js-cookie"

export async function getStudentSchoolId(id: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_SCHOOLS}/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetStudentSchoolId(id: string | undefined) {
  const query = useQuery(["student-schools", id], () => getStudentSchoolId(id), {
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetStudentSchoolId