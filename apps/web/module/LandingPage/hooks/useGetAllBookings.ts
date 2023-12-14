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
  })
  return query
}
export default useGetAllBookings
