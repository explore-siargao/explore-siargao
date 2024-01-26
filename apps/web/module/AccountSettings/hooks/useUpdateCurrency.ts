import { ApiService } from "@/common/service/api"
import { API_URL_USERS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function updateCurrency(personalInfoId: string | null, props: string) {
  const apiService = new ApiService()
  return await apiService.patch(`${API_URL_USERS}/personal-info/currency/${personalInfoId}`, props)
}

function useUpdateCurrency(personalInfoId: string | null) {
  const query = useMutation({
    mutationFn: (props: string) => updateCurrency(personalInfoId, props),
  })
  return query
}
export default useUpdateCurrency
