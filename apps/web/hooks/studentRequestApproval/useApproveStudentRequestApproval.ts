import { ZT_AdmissionRequest, ZT_StudentRequestApproval } from "contract"
import {
  API_URL_ADMISSION_REQUESTS,
  API_URL_STUDENT_REQUEST_APPROVALS,
} from "constants/"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

export async function approveStudentRequestApproval({
  _id,
  isApprove,
}: ZT_StudentRequestApproval) {
  const token = Cookies.get("tfl")
  const res = await fetch(
    `${API_URL_STUDENT_REQUEST_APPROVALS}/approve/${_id}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        isApprove,
      }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return await res.json()
}

function useApproveStudentRequestApproval() {
  const query = useMutation(({ _id, isApprove }: ZT_StudentRequestApproval) =>
    approveStudentRequestApproval({
      _id,
      isApprove,
    })
  )
  return query
}

export default useApproveStudentRequestApproval
