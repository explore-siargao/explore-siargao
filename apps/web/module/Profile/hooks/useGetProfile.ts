import { ApiService } from "@/common/service/api"
import { API_URL_USERS } from "@/common/constants"
import { useQuery } from "@tanstack/react-query"

export async function getProfile(id: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_USERS}/${id}`)
}

function useGetProfile(id: number | undefined) {
  const query = useQuery({
    queryKey: ["user-profile", id],
    queryFn: () => getProfile(id),
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetProfile
