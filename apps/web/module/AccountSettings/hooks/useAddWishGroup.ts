import { ApiService } from "@/common/service/api"
import { IWishGroup } from "@/common/types/global"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function addWishgroup(
  userId: number | undefined,
  props: IWishGroup
) {
  const apiService = new ApiService()
  return await apiService.post(`${API_URL_BOOKINGS}/${userId}/wish`, props)
}

function useAddWishGroup(userId: number) {
  const query = useMutation({
    mutationFn: (props: IWishGroup) => addWishgroup(userId, props),
  })
  return query
}
export default useAddWishGroup
