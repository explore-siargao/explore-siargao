import { ApiService } from "@/common/service/api"
import {API_URL_USERS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

interface IChangePassword {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export async function updateUserPassword(
  userId: number | null,
  props: IChangePassword
) {
  const apiService = new ApiService()
  return await apiService.patch(
    `${API_URL_USERS}/change-password/${userId}`,
    props
  )
}

function useUpdateAccountPassword(userId: number | null) {
  const query = useMutation({
    mutationFn: (props: IChangePassword) => updateUserPassword(userId, props),
  })
  return query
}
export default useUpdateAccountPassword
