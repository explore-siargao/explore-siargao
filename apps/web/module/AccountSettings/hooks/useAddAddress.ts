import { ApiService } from "@/common/service/api"
import { IAddress } from "@/common/types/global"
import { API_URL_USERS } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"
import { T_Address } from "@repo/contract"

export async function addAddress(
  personId: number | undefined,
  props: T_Address
) {
  const apiService = new ApiService()
  return await apiService.post(
    `${API_URL_USERS}/${personId}/address/add/`,
    props
  )
}

function useAddAddress(personId: number) {
  const query = useMutation({
    mutationFn: (props: T_Address) => addAddress(personId, props),
  })
  return query
}
export default useAddAddress
