import { API_URL_STUDENT_LEVELS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import { ZT_StudentLevel } from "contract"
import Cookies from "js-cookie"

export async function addGradeLevel(props: ZT_StudentLevel) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_LEVELS}`, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useAddGradeLevel() {
  const query = useMutation((props: ZT_StudentLevel) => addGradeLevel(props))
  return query
}

export default useAddGradeLevel
