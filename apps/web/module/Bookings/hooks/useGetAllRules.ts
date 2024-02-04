import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@/common/constants"
import { useQuery } from "@tanstack/react-query"

export async function getAllRules() {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}/all/rules`)
}

function useGetAllRules() {
  const query = useQuery({
    queryKey: ["rules"],
    queryFn: () => getAllRules(),
    refetchOnWindowFocus: false,
  })
  return query
}
export default useGetAllRules
