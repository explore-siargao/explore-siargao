import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function getListingById(id: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}/${id}`)
}

function useGetListing(id: number | undefined) {
  const query = useQuery({
    queryKey: ["bookings", id],
    queryFn: () => getListingById(id),
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetListing
