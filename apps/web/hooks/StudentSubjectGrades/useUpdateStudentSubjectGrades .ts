import { ZT_StudentSubjectGrades } from "contract"
import { API_URL_STUDENT_SUBJECT_GRADES } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

export async function updateStudentSubjectGrades({
  _id,
  studentId,
  schoolId,
  studentLevelId,
  subjectGrades,
  createdAt,
  updatedAt,
}: ZT_StudentSubjectGrades) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_SUBJECT_GRADES}/${_id}`, {
    method: "PATCH",
    body: JSON.stringify({
      studentId,
      schoolId,
      studentLevelId,
      subjectGrades,
      createdAt,
      updatedAt,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useUpdateStudentSubjectGrades() {
  const query = useMutation(
    ({
      _id,
      studentId,
      schoolId,
      studentLevelId,
      subjectGrades,
      createdAt,
      updatedAt,
    }: ZT_StudentSubjectGrades) =>
      updateStudentSubjectGrades({
        _id,
        studentId,
        schoolId,
        studentLevelId,
        subjectGrades,
        createdAt,
        updatedAt,
      })
  )

  return query
}

export default useUpdateStudentSubjectGrades
