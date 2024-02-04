import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@/common/constants"
import { T_ReportListing } from "@repo/contract"
import { useMutation } from "@tanstack/react-query"

export async function addReport(
  userId: number | undefined,
  props: T_ReportListing
) {
  const apiService = new ApiService()
  return await apiService.post(`${API_URL_BOOKINGS}/${userId}/reports`, props)
}

function useAddReport(userId: number) {
  const query = useMutation({
    mutationFn: (props: T_ReportListing) => addReport(userId, props),
  })
  return query
}
export default useAddReport
