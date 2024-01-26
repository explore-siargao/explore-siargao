import { ApiService } from "@/common/service/api"
import { API_URL_TAX } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function geTaxId(taxId: string | undefined) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_TAX}/id`)
}

function useGEtTaxByUser(taxId: string | undefined) {
  const query = useQuery({
    queryKey: ["tax", taxId],
    queryFn: () => geTaxId(taxId),
    refetchOnWindowFocus: false,
    enabled: !!taxId,
  })
  return query
}
export default useGEtTaxByUser
