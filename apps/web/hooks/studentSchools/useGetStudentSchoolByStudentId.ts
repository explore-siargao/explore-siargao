import { useQuery } from "@tanstack/react-query"
import { API_URL_STUDENT_SCHOOLS } from "constants/"
import Cookies from "js-cookie"

export async function getStudentSchoolBystudentId(
  id: string | undefined,
  search: string | null
) {
  const token = Cookies.get("tfl")
  const res = await fetch(
    `${API_URL_STUDENT_SCHOOLS}/student/${id}/${search}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return await res.json()
}

function useGetStudentSchoolByStudentId(
  id: string | undefined,
  search: string | null
) {
  const query = useQuery(
    ["student-schools", id],
    () => getStudentSchoolBystudentId(id, search),
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
    }
  )

  return query
}
export default useGetStudentSchoolByStudentId
