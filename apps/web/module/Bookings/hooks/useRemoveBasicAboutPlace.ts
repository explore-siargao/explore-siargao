import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function removeBasicAboutPlace(userId: number, id: number) {
  const apiService = new ApiService()
  return await apiService.delete(
    `${API_URL_BOOKINGS}/${userId}/basic-about-place/${id}`
  )
}

function useRemoveBasicAboutPlace(userId: number, id: number) {
  const query = useMutation({
    mutationFn: () => removeBasicAboutPlace(userId, id),
  })
  return query
}
export default useRemoveBasicAboutPlace
