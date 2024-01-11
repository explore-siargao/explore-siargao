import { ApiService } from "@/common/service/api"
import { API_URL_USERS } from "@repo/constants"
import { T_GovernmentId } from "@repo/contract"
import { useMutation } from "@tanstack/react-query"

export async function addGovernmentId(
  personId: number | undefined,
  props: T_GovernmentId
) {
  const apiService = new ApiService()
  return await apiService.post(
    `${API_URL_USERS}/${personId}/government-id`,
    props
  )
}

function useAddGovernmentId(personId: number) {
  const query = useMutation({
    mutationFn: (props: T_GovernmentId) => addGovernmentId(personId, props),
  })
  return query
}
export default useAddGovernmentId
