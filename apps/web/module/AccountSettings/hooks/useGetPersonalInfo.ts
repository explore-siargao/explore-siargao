import { ApiService } from "@/common/service/api"
import { API_URL_USERS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function getPersonalInfo(userId: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_USERS}/personal-info/${userId}`)
}

function useGetPersonalInfo(userId: number | undefined) {
  const query = useQuery({
    queryKey: ["personal-info", userId],
    queryFn: () => getPersonalInfo(userId),
    refetchOnWindowFocus: false,
    enabled: !!userId,
  })
  return query
}
export default useGetPersonalInfo
