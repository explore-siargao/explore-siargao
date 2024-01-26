import { ApiService } from "@/common/service/api"
import { IPersonalInfo } from "@/common/types/global"
import { API_URL_USERS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function deactivateAccount(userId: number | undefined) {
  const apiService = new ApiService()
  return await apiService.patch(`${API_URL_USERS}/deactivate/${userId}`)
}

function useDeactivateAccount(userId: number) {
  const query = useMutation({
    mutationFn: () => deactivateAccount(userId),
  })
  return query
}
export default useDeactivateAccount
