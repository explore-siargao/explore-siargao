import { ApiService } from "@/common/service/api"
import { API_URL_USERS } from "@/common/constants"
import { useQuery } from "@tanstack/react-query"

export async function getProfile(userId: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_USERS}/${userId}/profile`)
}

function useGetProfile(userId: number | undefined) {
  const query = useQuery({
    queryKey: ["user-profile", userId],
    queryFn: () => getProfile(userId),
    refetchOnWindowFocus: false,
    enabled: !!userId,
  })
  return query
}
export default useGetProfile
