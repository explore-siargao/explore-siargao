import { API_URL_TAX } from "@repo/constants"
import { ITaxes } from "@/common/types/global"
import { useMutation } from "@tanstack/react-query"
import { ApiService } from "@/common/service/api"

export async function addTax(userId: string | undefined, props: ITaxes) {
  const apiService = new ApiService()
  return await apiService.post(`${API_URL_TAX}/id`, props)
}

function useAddTax(userId: string) {
  const query = useMutation({
    mutationFn: (props: ITaxes) => addTax(userId, props),
  })
  return query
}
export default useAddTax
