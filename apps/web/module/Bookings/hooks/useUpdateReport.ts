import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { T_ReportListing } from "@repo/contract"
import { useMutation } from "@tanstack/react-query"

export async function updateReport(
  userId: number | null,
  props: T_ReportListing
) {
  const apiService = new ApiService()
  return await apiService.patch(
    `${API_URL_BOOKINGS}/${userId}/reports/${props.id}`,
    props
  )
}

function useUpdateReport(userId: number | null) {
  const query = useMutation({
    mutationFn: (props: T_ReportListing) => updateReport(userId, props),
  })
  return query
}
export default useUpdateReport
