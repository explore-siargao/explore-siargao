import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function removeSafetyProperty(userId: number, id: number) {
  const apiService = new ApiService()
  return await apiService.delete(
    `${API_URL_BOOKINGS}/${userId}/safety-properties/${id}`
  )
}

function useRemoveSafetyProperty(userId: number, id: number) {
  const query = useMutation({
    mutationFn: () => removeSafetyProperty(userId, id),
  })
  return query
}
export default useRemoveSafetyProperty
