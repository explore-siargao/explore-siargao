import { ZT_StudentSchoolId } from "contract"
import { API_URL_STUDENT_SCHOOLS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

export async function updateStudentSchool({
  _id,
  studentId,
  schoolId,
  isCurrent,
}: ZT_StudentSchoolId) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_SCHOOLS}/${_id}`, {
    method: "PATCH",
    body: JSON.stringify({
      studentId,
      schoolId,
      isCurrent,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useUpdateStudentSchool() {
  const query = useMutation(
    ({ _id, studentId, schoolId, isCurrent }: ZT_StudentSchoolId) =>
      updateStudentSchool({
        _id,
        studentId,
        schoolId,
        isCurrent,
      })
  )

  return query
}

export default useUpdateStudentSchool
