import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function getListingHighlightsByListingId(
  listingId: number | undefined
) {
  const apiService = new ApiService()
  return await apiService.get(
    `${API_URL_BOOKINGS}/listing-highlights/${listingId}`
  )
}

function useGetListingHighlightsByListing(listingId: number | undefined) {
  const query = useQuery({
    queryKey: ["listing-highlights", listingId],
    queryFn: () => getListingHighlightsByListingId(listingId),
    refetchOnWindowFocus: false,
    enabled: !!listingId,
  })
  return query
}
export default useGetListingHighlightsByListing
