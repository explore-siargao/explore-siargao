import { ApiService } from "@/common/service/api"
import { API_URL_CARTS } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"
import { T_Carts } from "@repo/contract"

export async function addCartItem(userId: number | undefined, props: T_Carts) {
  const apiService = new ApiService("mock")
  return await apiService.post(`${API_URL_CARTS}/${userId}`, props)
}

function useAddCartItem(userId: number) {
  const query = useMutation({
    mutationFn: (props: T_Carts) => addCartItem(userId, props),
  })
  return query
}
export default useAddCartItem
