import { ZT_TransferRequest } from "contract"
import { API_URL_TRANSFER_REQUESTS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

export async function updateTransferRequest({
  _id,
  studentId,
  schoolId,
  isApproved,
  admissionRequestId,
  deletedAt,
}: ZT_TransferRequest) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_TRANSFER_REQUESTS}/${_id}`, {
    method: "PATCH",
    body: JSON.stringify({
      studentId,
      schoolId,
      isApproved,
      admissionRequestId,
      deletedAt,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useUpdateTransferRequest() {
  const query = useMutation(
    ({
      _id,
      studentId,
      schoolId,
      isApproved,
      admissionRequestId,
      deletedAt,
    }: ZT_TransferRequest) =>
      updateTransferRequest({
        _id,
        studentId,
        schoolId,
        isApproved,
        admissionRequestId,
        deletedAt,
      })
  )

  return query
}

export default useUpdateTransferRequest
