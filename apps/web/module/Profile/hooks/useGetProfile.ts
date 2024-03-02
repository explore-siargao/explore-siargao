import { ApiService } from "@/common/service/api"
import { API_URL_USERS } from "@/common/constants"
import { useQuery } from "@tanstack/react-query"
import { T_BackendResponse } from "@repo/contract"
import { T_ProfileEditStore } from "../Setup/store/useProfileEditStore"

type T_DBReturn = Omit<T_BackendResponse, "item"> & {
  item: T_ProfileEditStore
}

export async function getProfile(userId: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get<T_DBReturn>(`${API_URL_USERS}/${userId}/profile`)
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
