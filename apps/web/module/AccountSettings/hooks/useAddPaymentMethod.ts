import { ApiService } from "@/common/service/api"
import { API_URL_PAYMENTS } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"
interface CardInfoProps {
  cardInfo: string
  userId: number
}
export async function addPaymentMethod(
  userId: number | undefined,
  props: CardInfoProps
) {
  const apiService = new ApiService()
  return await apiService.post(
    `${API_URL_PAYMENTS}/${userId}/payment-method`,
    props
  )
}

function useAddPaymentMethod(userId: number) {
  const query = useMutation({
    mutationFn: (props: CardInfoProps) => addPaymentMethod(userId, props),
  })
  return query
}
export default useAddPaymentMethod
