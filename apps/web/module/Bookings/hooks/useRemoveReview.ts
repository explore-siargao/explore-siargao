import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"

export async function removeReview(userId: number, reviewId: number) {
  const apiService = new ApiService()
  return await apiService.delete(
    `${API_URL_BOOKINGS}/${userId}/reviews/delete/${reviewId}`
  )
}

function useRemoveReview(userId: number, reviewId: number) {
  const query = useMutation({
    mutationFn: () => removeReview(userId, reviewId),
  })
  return query
}
export default useRemoveReview
