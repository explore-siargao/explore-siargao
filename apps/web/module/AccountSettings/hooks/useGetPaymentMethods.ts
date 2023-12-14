import { ApiService } from "@/common/service/api"
import { API_URL_PAYMENTS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function getPaymentMethods(userId: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_PAYMENTS}/${userId}/payment-method`)
}

function useGetPaymentmethods(userId: number | undefined) {
  const query = useQuery({
    queryKey: ["payment-method", userId],
    queryFn: () => getPaymentMethods(userId),
    refetchOnWindowFocus: false,
    enabled: !!userId,
  })
  return query
}
export default useGetPaymentmethods
