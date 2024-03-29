import { ApiService } from "@/common/service/api"
import { IPaymentMethod } from "@/common/types/global"
import { API_URL_PAYMENTS } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"

export async function addPaymentMethod(
  userId: number | undefined,
  props: IPaymentMethod
) {
  const apiService = new ApiService()
  return await apiService.post(
    `${API_URL_PAYMENTS}/${userId}/payment-method`,
    props
  )
}

function useAddPaymentMethod(userId: number) {
  const query = useMutation({
    mutationFn: (props: IPaymentMethod) => addPaymentMethod(userId, props),
  })
  return query
}
export default useAddPaymentMethod
