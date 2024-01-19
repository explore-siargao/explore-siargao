import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function getHouseRuleById(id: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}/house-rules/id/${id}`)
}

function useGetHouseRule(id: number | undefined) {
  const query = useQuery({
    queryKey: ["house-rules", id],
    queryFn: () => getHouseRuleById(id),
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetHouseRule
