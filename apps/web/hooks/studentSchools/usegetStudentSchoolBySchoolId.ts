import { useQuery } from "@tanstack/react-query"
import { API_URL_STUDENT_SCHOOLS } from "constants/"
import Cookies from "js-cookie"

export async function getStudentSchoolBySchoolId(id: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_SCHOOLS}/school/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function usegetStudentSchoolsBySchoolid(id: string | undefined) {
  const query = useQuery(
    ["student-schools", id],
    () => getStudentSchoolBySchoolId(id),
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
    }
  )
  return query
}
export default usegetStudentSchoolsBySchoolid
