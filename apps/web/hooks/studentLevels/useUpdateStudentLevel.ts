import { ZT_StudentLevel } from "contract"
import { API_URL_STUDENT_LEVELS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

export async function updateStudentLevel({
  _id,
  level,
  addedBy,
  createdAt,
  deletedAt,
  updatedAt,
}: ZT_StudentLevel) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_LEVELS}/${_id}`, {
    method: "PATCH",
    body: JSON.stringify({
      level,
      addedBy,
      createdAt,
      deletedAt,
      updatedAt,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useUpdateStudentLevel() {
  const query = useMutation(
    ({
      _id,
      level,
      addedBy,
      createdAt,
      deletedAt,
      updatedAt,
    }: ZT_StudentLevel) =>
      updateStudentLevel({
        _id,
        level,
        addedBy,
        createdAt,
        deletedAt,
        updatedAt,
      })
  )

  return query
}

export default useUpdateStudentLevel
