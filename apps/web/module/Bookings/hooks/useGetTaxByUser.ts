import { ApiService } from "@/common/service/api"
import { API_URL_TAX } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function geTaxId(userId: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_TAX}/${userId}`)
}

function useGEtTaxByUser(userId: number | undefined) {
  const query = useQuery({
    queryKey: ["tax", userId],
    queryFn: () => geTaxId(userId),
    refetchOnWindowFocus: false,
    enabled: !!userId,
  })
  return query
}
export default useGEtTaxByUser
