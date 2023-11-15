import { useQuery } from "@tanstack/react-query"
import { API_URL_STUDENT_LEVELS } from "constants/"
import Cookies from "js-cookie"

export async function getGradeLevel(level: string | undefined | null) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_LEVELS}/search/${level}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useSearchActiveGradeLevel(level: string | undefined | null) {
  const query = useQuery(["student-level"], () => getGradeLevel(level), {
    refetchOnWindowFocus: false,
  })
  return query
}
export default useSearchActiveGradeLevel
