import { ApiService } from "@/common/service/api"
import { API_URL_USERS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"
import { FIFTEEN_MINUTES, TWELVE_MINUTES } from "../constants"

export async function getUserDetails() {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_USERS}/auth/user-details`)
}

function useGetPersonalInfo() {
  const query = useQuery({
    queryKey: ["personal-info"],
    queryFn: () => getUserDetails(),
    refetchOnWindowFocus: false,
    gcTime: FIFTEEN_MINUTES,
    staleTime: TWELVE_MINUTES,
  })
  return query
}
export default useGetPersonalInfo
