import { ApiService } from "@/common/service/api"
import { IPaymentMethod, IPersonalInfo } from "@/common/types/global"
import { API_URL_PAYMENTS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function updatePaymentMethod(
  userId: number | undefined,
  props: IPaymentMethod
) {
  const apiService = new ApiService()
  return await apiService.patch(
    `${API_URL_PAYMENTS}/${userId}/payment-method/${props.id}`,
    props
  )
}

function useUpdatepaymentMethod(userId: number) {
  const query = useMutation({
    mutationFn: (props: IPaymentMethod) => updatePaymentMethod(userId, props),
  })
  return query
}
export default useUpdatepaymentMethod
