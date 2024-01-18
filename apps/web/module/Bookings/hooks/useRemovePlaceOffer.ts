import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function removePlaceOffer(userId: number, id: number) {
  const apiService = new ApiService()
  return await apiService.delete(
    `${API_URL_BOOKINGS}/${userId}/place-offers/delete/${id}`
  )
}

function useRemovePlaceOffer(userId: number, id: number) {
  const query = useMutation({
    mutationFn: () => removePlaceOffer(userId, id),
  })
  return query
}
export default useRemovePlaceOffer
