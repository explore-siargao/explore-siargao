import { ZT_AdmissionRequest } from "contract"
import { API_URL_ADMISSION_REQUESTS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

export async function updateAdmissionRequest({
  _id,
  studentId,
  isApproved,
  updatedAt,
  schoolId,
  deletedAt,
}: ZT_AdmissionRequest) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_ADMISSION_REQUESTS}/${_id}`, {
    method: "PATCH",
    body: JSON.stringify({
      studentId,
      schoolId,
      isApproved,
      updatedAt,
      deletedAt,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useUpdateAdmissionRequest() {
  const query = useMutation(
    ({
      _id,
      studentId,
      isApproved,
      updatedAt,
      schoolId,
      deletedAt,
    }: ZT_AdmissionRequest) =>
      updateAdmissionRequest({
        _id,
        studentId,
        isApproved,
        updatedAt,
        schoolId,
        deletedAt,
      })
  )

  return query
}

export default useUpdateAdmissionRequest
