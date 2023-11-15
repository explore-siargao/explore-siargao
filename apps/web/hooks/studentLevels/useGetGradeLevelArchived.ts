import { useQuery } from "@tanstack/react-query"
import {API_URL_STUDENT_LEVELS } from "constants/"
import Cookies from "js-cookie"

export async function getGradeLevelArchived() {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_LEVELS}/grade/level/`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetGradeLevelArchived() {
  const query = useQuery(["student-level"], () => getGradeLevelArchived(), {
    refetchOnWindowFocus: false,
  })
  return query
}
export default useGetGradeLevelArchived