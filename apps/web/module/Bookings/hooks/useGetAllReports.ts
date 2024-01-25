import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function getAllReports() {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}/all/reports`)
}

function useGetAllReports() {
  const query = useQuery({
    queryKey: ["reports"],
    queryFn: () => getAllReports(),
    refetchOnWindowFocus: false,
  })
  return query
}
export default useGetAllReports
