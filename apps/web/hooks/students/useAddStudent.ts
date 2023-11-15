import { API_URL_STUDENTS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import { ZT_Student } from "contract"
import Cookies from "js-cookie"

export async function addStudent(props: ZT_Student) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENTS}`, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useAddStudent() {
  const query = useMutation((props: ZT_Student) => addStudent(props))
  return query
}

export default useAddStudent
