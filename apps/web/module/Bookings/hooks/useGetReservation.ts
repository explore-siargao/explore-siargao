import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@/common/constants"
import { useQuery } from "@tanstack/react-query"

export async function getReservationById(id: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}/reservation-listing/${id}`)
}

function useGetReservation(id: number | undefined) {
  const query = useQuery({
    queryKey: ["reservation-listing", id],
    queryFn: () => getReservationById(id),
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetReservation
