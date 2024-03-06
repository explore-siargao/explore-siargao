import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@/common/constants"
import { useQuery } from "@tanstack/react-query"

export async function getUpcomingEarnings() {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}/earnings/upcoming`)
}

function useGetUpcomingEarnings() {
  const query = useQuery({
    queryKey: ["this-month-earnings"],
    queryFn: () => getUpcomingEarnings(),
    refetchOnWindowFocus: false,
  })
  return query
}
export default useGetUpcomingEarnings