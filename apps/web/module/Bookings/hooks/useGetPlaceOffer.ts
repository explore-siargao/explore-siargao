import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function getPlaceOffer(id: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}/place-offers/${id}`)
}

function useGetPlaceOffer(id: number | undefined) {
  const query = useQuery({
    queryKey: ["place-offer", id],
    queryFn: () => getPlaceOffer(id),
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetPlaceOffer
