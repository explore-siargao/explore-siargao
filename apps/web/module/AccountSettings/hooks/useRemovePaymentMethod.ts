import { ApiService } from "@/common/service/api"
import { IPaymentMethod } from "@/common/types/global"
import { API_URL_PAYMENTS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function removePaymentMethod(
  userid: number,
  paymentMethodId: number
) {
  const apiService = new ApiService()
  return await apiService.delete(
    `${API_URL_PAYMENTS}/${userid}/payment-method/${paymentMethodId}`
  )
}

function useRemovePaymentmethod(userId: number) {
  const query = useMutation({
    mutationFn: (props: IPaymentMethod) =>
      removePaymentMethod(userId, props?.id as number),
  })
  return query
}
export default useRemovePaymentmethod
