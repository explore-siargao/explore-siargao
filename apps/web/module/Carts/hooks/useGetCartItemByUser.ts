import { API_URL_CARTS } from "@/common/constants"
import { ApiService } from "@/common/service/api"
import { useQuery } from "@tanstack/react-query"

export async function getCartItemByUser(userId: number | undefined) {
  const apiService = new ApiService("mock")
  return await apiService.get(`${API_URL_CARTS}/user/${userId}`)
}

function useGetCartItemByUser(userId: number | undefined) {
  const query = useQuery({
    queryKey: ["carts-user", userId],
    queryFn: () => getCartItemByUser(userId),
    refetchOnWindowFocus: false,
    enabled: !!userId,
  })
  return query
}

export default useGetCartItemByUser
