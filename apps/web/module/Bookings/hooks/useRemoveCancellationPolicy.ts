import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function removeCancellationPolicy(userId: number, id: number) {
  const apiService = new ApiService()
  return await apiService.delete(
    `${API_URL_BOOKINGS}/${userId}/cancellation-policies/${id}`
  )
}

function useRemoveCancellationPolicy(userId: number, id: number) {
  const query = useMutation({
    mutationFn: () => removeCancellationPolicy(userId, id),
  })
  return query
}
export default useRemoveCancellationPolicy
