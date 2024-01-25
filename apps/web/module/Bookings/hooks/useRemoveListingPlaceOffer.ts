import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function removeListingPlaceOffer(userId: number, id: number) {
  const apiService = new ApiService()
  return await apiService.delete(
    `${API_URL_BOOKINGS}/${userId}/listing-place-offers/delete/${id}`
  )
}

function useRemoveListingPlaceOffer(userId: number, id: number) {
  const query = useMutation({
    mutationFn: () => removeListingPlaceOffer(userId, id),
  })
  return query
}
export default useRemoveListingPlaceOffer
