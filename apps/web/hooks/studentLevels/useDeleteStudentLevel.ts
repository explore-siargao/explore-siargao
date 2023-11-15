import { API_URL_STUDENT_LEVELS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

async function deleteStudentLevel(id: string) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_LEVELS}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useDeleteStudentLevel() {
  const mutation = useMutation((id: string) => deleteStudentLevel(id))

  return mutation
}

export default useDeleteStudentLevel
