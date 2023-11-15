import { API_URL_STUDENT_SCHOOLS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import { ZT_StudentSchoolId } from "contract"
import Cookies from "js-cookie"

export async function AddStudentSchool(props: ZT_StudentSchoolId) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_SCHOOLS}`, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useAddStudentSchool() {
  const query = useMutation((props: ZT_StudentSchoolId) =>
    AddStudentSchool(props)
  )
  return query
}

export default useAddStudentSchool
