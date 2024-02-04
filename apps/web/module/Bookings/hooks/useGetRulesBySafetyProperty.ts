import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@/common/constants"
import { useQuery } from "@tanstack/react-query"

export async function getRulesBySafetyPropertyId(
  safetyPropertyId: number | undefined
) {
  const apiService = new ApiService()
  return await apiService.get(
    `${API_URL_BOOKINGS}/rules/safety-property/${safetyPropertyId}`
  )
}

function useGetRulesBySafetyProperty(safetyPropertyId: number | undefined) {
  const query = useQuery({
    queryKey: ["rules", safetyPropertyId],
    queryFn: () => getRulesBySafetyPropertyId(safetyPropertyId),
    refetchOnWindowFocus: false,
    enabled: !!safetyPropertyId,
  })
  return query
}
export default useGetRulesBySafetyProperty
