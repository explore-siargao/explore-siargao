import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@/common/constants"
import { T_Listing } from "@repo/contract"
import { useMutation } from "@tanstack/react-query"

export async function addListing(userId: number | undefined, props: T_Listing) {
  const apiService = new ApiService()
  return await apiService.post(`${API_URL_BOOKINGS}/${userId}`, props)
}

function useAddListing(userId: number) {
  const query = useMutation({
    mutationFn: (props: T_Listing) => addListing(userId, props),
  })
  return query
}
export default useAddListing
