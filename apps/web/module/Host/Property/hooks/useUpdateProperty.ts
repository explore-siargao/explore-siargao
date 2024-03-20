import { ApiService } from "@/common/service/api"
import { API_URL_PROPERTIES } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"
import { T_Property } from "@repo/contract"

export async function updateProperty(hostId: number | null, props: T_Property) {
  const apiService = new ApiService("mock")
  return await apiService.patch(`${API_URL_PROPERTIES}/${hostId}`, props)
}

function useUpdateProperty(hostId: number | null) {
  const query = useMutation({
    mutationFn: (props: T_Property) => updateProperty(hostId, props),
  })
  return query
}
export default useUpdateProperty
