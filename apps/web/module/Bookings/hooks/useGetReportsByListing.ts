import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@/common/constants"
import { useQuery } from "@tanstack/react-query"

export async function getReportsByListingId(listingId: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}/reports/${listingId}`)
}

function useGetReportsByListing(listingId: number | undefined) {
  const query = useQuery({
    queryKey: ["reports", listingId],
    queryFn: () => getReportsByListingId(listingId),
    refetchOnWindowFocus: false,
    enabled: !!listingId,
  })
  return query
}
export default useGetReportsByListing
