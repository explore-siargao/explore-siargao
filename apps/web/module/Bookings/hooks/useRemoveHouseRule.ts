import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function removeHouseRule(userId: number, id: number) {
  const apiService = new ApiService()
  return await apiService.delete(
    `${API_URL_BOOKINGS}/${userId}/house-rules/${id}`
  )
}

function useRemoveHouseRule(userId: number, id: number) {
  const query = useMutation({
    mutationFn: () => removeHouseRule(userId, id),
  })
  return query
}
export default useRemoveHouseRule
