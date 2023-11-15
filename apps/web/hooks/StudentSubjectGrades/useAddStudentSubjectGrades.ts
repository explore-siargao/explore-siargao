import { API_URL_STUDENT_SUBJECT_GRADES } from "constants/"
import { useMutation } from "@tanstack/react-query"
import { ZT_StudentSubjectGrades } from "contract"
import Cookies from "js-cookie"

export async function addStudentSubjectGrades(props: ZT_StudentSubjectGrades) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_SUBJECT_GRADES}`, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useAddStudentSubjectGrades() {
  const query = useMutation((props: ZT_StudentSubjectGrades) =>
    addStudentSubjectGrades(props)
  )
  return query
}

export default useAddStudentSubjectGrades
