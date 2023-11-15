import { useQuery } from "@tanstack/react-query"
import {API_URL_STUDENT_SCHOOLS } from "constants/"
import Cookies from "js-cookie"

export async function getStudentSchoolByLrnOrName(id: string | undefined, lrnOrName: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_SCHOOLS}/search/${id}/${lrnOrName}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useSearchStudentSchoolByLrnOrName(id: string | undefined, lrnOrName: string | undefined) {
  const query = useQuery(["student-schools", id], () => getStudentSchoolByLrnOrName(id,lrnOrName), {
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useSearchStudentSchoolByLrnOrName