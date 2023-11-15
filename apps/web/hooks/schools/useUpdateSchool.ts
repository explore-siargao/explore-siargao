import { ZT_School } from "contract"
import { API_URL_SCHOOLS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

export async function updateSchool({
  _id,
  schoolName,
  schoolId,
  schoolAddress,
  schoolType,
  deletedAt
}: ZT_School) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_SCHOOLS}/${_id}`, {
    method: "PATCH",
    body: JSON.stringify({
      schoolId,
      schoolAddress,
      schoolType,
      schoolName,
      deletedAt
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useUpdateSchool() {
  const query = useMutation(
    ({
      _id,
      schoolId,
      schoolAddress,
      schoolType,
      schoolName,
      deletedAt
    }: ZT_School) =>
      updateSchool({
        _id,
        schoolId,
      schoolAddress,
      schoolType,
      schoolName,
      deletedAt
      })
  )

  return query
}

export default useUpdateSchool