import { API_URL_STUDENT_SUBJECT_GRADES } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

async function removeStudentSubjectGrades(id) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_SUBJECT_GRADES}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useRemoveStudentSubjectGrades() {
  const mutation = useMutation((id) => removeStudentSubjectGrades(id))

  return mutation
}

export default useRemoveStudentSubjectGrades
