import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function getRuleByHouseRule(houseRuleId: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}/rules/house-rule/${houseRuleId}`)
}

function useGetRulesByHouseRule(houseRuleId: number | undefined) {
  const query = useQuery({
    queryKey: ["rules", houseRuleId],
    queryFn: () => getRuleByHouseRule(houseRuleId),
    refetchOnWindowFocus: false,
    enabled: !!houseRuleId,
  })
  return query
}
export default useGetRulesByHouseRule
