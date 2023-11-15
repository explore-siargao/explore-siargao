import { useQuery } from "@tanstack/react-query"
import {API_URL_STUDENTS } from "constants/"
import Cookies from "js-cookie"

export async function getStudentByLrn(lrn: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENTS}/lrn/${lrn}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetStudentByLrn(lrn: string | undefined) {
  const query = useQuery(["students", lrn], () => getStudentByLrn(lrn), {
    refetchOnWindowFocus: false,
    enabled: !!lrn,
  })
  return query
}
export default useGetStudentByLrn