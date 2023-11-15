import { useQuery } from "@tanstack/react-query"
import { API_URL_STUDENT_REQUEST_APPROVALS, API_URL_TRANSFER_REQUESTS } from "constants/"
import Cookies from "js-cookie"

export async function getStudentRequestApprovalByStudentid(id: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_STUDENT_REQUEST_APPROVALS}/student/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetStudentRequestApprovalByStudentId(id: string | undefined) {
  const query = useQuery(
    ["student-request-approvals", id],
    () => getStudentRequestApprovalByStudentid(id),
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
    }
  )
  return query
}
export default useGetStudentRequestApprovalByStudentId
