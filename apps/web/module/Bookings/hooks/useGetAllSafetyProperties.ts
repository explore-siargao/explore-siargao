import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function getAllSafetyProperties() {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}/all/safety-properties`)
}

function useGetAllSafetyProperties() {
  const query = useQuery({
    queryKey: ["safety-properties"],
    queryFn: () => getAllSafetyProperties(),
    refetchOnWindowFocus: false,
  })
  return query
}
export default useGetAllSafetyProperties