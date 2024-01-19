import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function getAllPlaceOffers() {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}/all/place-offers`)
}

function useGetAllPlaceOffers() {
  const query = useQuery({
    queryKey: ["place-offer"],
    queryFn: () => getAllPlaceOffers(),
    refetchOnWindowFocus: false,
  })
  return query
}
export default useGetAllPlaceOffers
