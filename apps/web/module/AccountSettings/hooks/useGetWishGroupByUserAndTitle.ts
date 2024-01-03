import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function getWishGroupByTitle(
  userId: number | undefined,
  title: string
) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}/${userId}/${title}/wishes`)
}

function useGetWishGroupByUserAndTitle(
  userId: number | undefined,
  title: string
) {
  const query = useQuery({
    queryKey: ["wish-group", userId],
    queryFn: () => getWishGroupByTitle(userId, title),
    refetchOnWindowFocus: false,
    enabled: !!userId,
  })
  return query
}
export default useGetWishGroupByUserAndTitle
