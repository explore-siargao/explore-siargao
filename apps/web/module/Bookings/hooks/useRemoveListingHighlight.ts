import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function removeListingHighlight(userId: number, id: number) {
  const apiService = new ApiService()
  return await apiService.delete(
    `${API_URL_BOOKINGS}/${userId}/listing-highlights/delete/${id}`
  )
}

function useRemoveListingHighlight(userId: number, id: number) {
  const query = useMutation({
    mutationFn: () => removeListingHighlight(userId, id),
  })
  return query
}
export default useRemoveListingHighlight
