import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@/common/constants"
import { useQuery } from "@tanstack/react-query"

export async function getReservationByListingId(listingId: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get(
    `${API_URL_BOOKINGS}/reservation-listing/listing/${listingId}`
  )
}

function useGetReservationsByListing(listingId: number | undefined) {
  const query = useQuery({
    queryKey: ["reservation-listing", listingId],
    queryFn: () => getReservationByListingId(listingId),
    refetchOnWindowFocus: false,
    enabled: !!listingId,
  })
  return query
}
export default useGetReservationsByListing
