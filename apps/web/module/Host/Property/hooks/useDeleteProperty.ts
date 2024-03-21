import { ApiService } from "@/common/service/api"
import { API_URL_PROPERTIES } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"
import { T_Property } from "@repo/contract"

export async function deleteProperty(hostId: number | undefined, id: number | undefined) {
  const apiService = new ApiService("mock")
  return await apiService.patch(`${API_URL_PROPERTIES}/${hostId}/${id}`)
}
function useDeleteProperty(hostId: number) {
  const query = useMutation({
    mutationFn: (props: T_Property) => deleteProperty(hostId , props.id)
  })
  return query
}
export default useDeleteProperty
