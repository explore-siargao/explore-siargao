import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@/common/constants"
import { T_ListingHighlight } from "@repo/contract"
import { useMutation } from "@tanstack/react-query"

export async function addListingHighlight(
  userId: number | undefined,
  props: T_ListingHighlight
) {
  const apiService = new ApiService()
  return await apiService.post(
    `${API_URL_BOOKINGS}/${userId}/listing-highlights`,
    props
  )
}

function useAddListingHighlight(userId: number) {
  const query = useMutation({
    mutationFn: (props: T_ListingHighlight) =>
      addListingHighlight(userId, props),
  })
  return query
}
export default useAddListingHighlight
