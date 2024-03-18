import { ApiService } from "@/common/service/api"
import { API_URL_CARTS } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"

export async function removeCartItem(id: number) {
  const apiService = new ApiService("mock")
  return await apiService.delete(`${API_URL_CARTS}/${id}`)
}

function useRemoveCartItem(id: number) {
  const query = useMutation({
    mutationFn: () => removeCartItem(id),
  })
  return query
}
export default useRemoveCartItem
