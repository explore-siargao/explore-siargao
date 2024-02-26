import { ApiService } from "@/common/service/api"
import { API_URL_LISTINGS } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"

export async function removeReport(userId: number, reportId: number) {
  const apiService = new ApiService()
  return await apiService.delete(
    `${API_URL_LISTINGS}/${userId}/reports/${reportId}`
  )
}

function useRemoveReport(userId: number, reportId: number) {
  const query = useMutation({
    mutationFn: () => removeReport(userId, reportId),
  })
  return query
}
export default useRemoveReport
