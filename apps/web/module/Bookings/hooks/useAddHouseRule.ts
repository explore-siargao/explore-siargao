import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { T_Rule } from "@repo/contract"
import { useMutation } from "@tanstack/react-query"

export async function addHouseRule(userId: number | undefined, props: T_Rule) {
  const apiService = new ApiService()
  return await apiService.post(
    `${API_URL_BOOKINGS}/${userId}/rules/house-rule`,
    props
  )
}

function useAddHouseRule(userId: number) {
  const query = useMutation({
    mutationFn: (props: T_Rule) => addHouseRule(userId, props),
  })
  return query
}
export default useAddHouseRule
