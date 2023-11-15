import { useQuery } from "@tanstack/react-query"
import {API_URL_STUDENT_SCHOOLS } from "constants/"
import Cookies from "js-cookie"

export async function getStudentSchoolIsCurrent(id: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_SCHOOLS}/current/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetStudentSchoolIsCurrent(id: string | undefined) {
  const query = useQuery(["student-schools", id], () => getStudentSchoolIsCurrent(id), {
    refetchOnWindowFocus: false,
    enabled: !!id,
  })

  return query
  
}
export default useGetStudentSchoolIsCurrent