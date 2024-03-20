import { ApiService } from "@/common/service/api"
import { API_URL_PROPERTIES } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"
import { T_Property } from "@repo/contract"

export async function addPropertyOfHost(
  hostId: number | undefined,
  props: T_Property
) {
  const apiService = new ApiService("mock")
  return await apiService.post(`${API_URL_PROPERTIES}/${hostId}`, props)
}

function useAddPropertyOfHost(hostId: number) {
  const query = useMutation({
    mutationFn: (props: T_Property) => addPropertyOfHost(hostId, props),
  })
  return query
}
export default useAddPropertyOfHost
