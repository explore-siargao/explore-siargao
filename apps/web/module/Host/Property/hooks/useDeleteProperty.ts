import { ApiService } from "@/common/service/api"
import { API_URL_PROPERTIES } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"

export async function deleteProperty(hostId: number | undefined) {
  const apiService = new ApiService()
  return await apiService.patch(`${API_URL_PROPERTIES}/${hostId}`)
}
function useDeleteProperty() {
  const query = useMutation({
    mutationFn: (hostId: number) => deleteProperty(hostId),
  })
  return query
}
export default useDeleteProperty
