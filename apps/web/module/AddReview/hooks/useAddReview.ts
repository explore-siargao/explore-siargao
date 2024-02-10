import { API_URL_BOOKINGS } from "@/common/constants"
import { ApiService } from "@/common/service/api"
import { IReview } from "@/common/types/global"

import { useMutation } from "@tanstack/react-query"

export async function addReview(userId: number | undefined, props: IReview) {
  const apiService = new ApiService()
  return await apiService.post(
    `${API_URL_BOOKINGS}/${userId}/reviews/post/`,
    props
  )
}

function useAddReview(userId: number) {
  const query = useMutation({
    mutationFn: (props: IReview) => addReview(userId, props),
  })
  return query
}
export default useAddReview
