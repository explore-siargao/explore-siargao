import { API_URL_USERS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"
import { ApiService } from "@/common/service/api"

export async function setReceivedEmail(userId: number | undefined) {
  const apiService = new ApiService()
  return await apiService.patch(`${API_URL_USERS}/${userId}`)
}
function useSetReceivedEmail(userId: number) {
  const query = useMutation({
    mutationFn: () => setReceivedEmail(userId),
  })
  return query
}

export default useSetReceivedEmail
