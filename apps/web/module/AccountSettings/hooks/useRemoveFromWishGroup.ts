import { ApiService } from "@/common/service/api"
import { IWishGroup } from "@/common/types/global"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function removeFromWishGroup(userId: number,wishGroupId: number) {
  const apiService = new ApiService()
  return await apiService.delete(
    `${API_URL_BOOKINGS}/${userId}/wish-group/delete/${wishGroupId}`
  )
}

function useRemoveFromWishGroup(userId: number) {
  const query = useMutation({
    mutationFn: (props: IWishGroup) => removeFromWishGroup(userId,props?.id as number),
  })
  return query
}
export default useRemoveFromWishGroup
