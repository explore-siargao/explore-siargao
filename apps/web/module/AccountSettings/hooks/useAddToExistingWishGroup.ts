import { ApiService } from "@/common/service/api"
import { IWishGroup } from "@/common/types/global"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function addToExisting(
  userId: number | undefined,
  wishGroupId: number | undefined,
  props: IWishGroup
) {
  const apiService = new ApiService()
  return await apiService.post(
    `${API_URL_BOOKINGS}/${userId}/${wishGroupId}/add-existing-group`,
    props
  )
}

function useAddToExistingWishGroup(userId: number, wishGroupId: number) {
  const query = useMutation({
    mutationFn: (props: IWishGroup) =>
      addToExisting(userId, wishGroupId, props),
  })
  return query
}
export default useAddToExistingWishGroup
