import { FIFTEEN_MINUTES, TWELVE_MINUTES } from "@/common/constants"
import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function getAllBookings() {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}`)
}

function useGetAllBookings() {
  const query = useQuery({
    queryKey: ["bookings"],
    queryFn: () => getAllBookings(),
    refetchOnWindowFocus: false,
    gcTime:FIFTEEN_MINUTES,
    staleTime:TWELVE_MINUTES
  })
  return query
}
export default useGetAllBookings
