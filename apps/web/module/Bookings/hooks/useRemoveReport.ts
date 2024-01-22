import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function removeReport(userId: number, reportId: number) {
  const apiService = new ApiService()
  return await apiService.delete(
    `${API_URL_BOOKINGS}/${userId}/reports/${reportId}`
  )
}

function useRemoveReport(userId: number, reportId: number) {
  const query = useMutation({
    mutationFn: () => removeReport(userId, reportId),
  })
  return query
}
export default useRemoveReport
