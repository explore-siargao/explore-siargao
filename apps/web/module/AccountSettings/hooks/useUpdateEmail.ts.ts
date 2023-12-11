import { ApiService } from "@/common/service/api"
import { IUser } from "@/common/types/global"
import { API_URL_USERS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function updateUserEmail(
  userId: number | undefined,
  props: IUser
) {
  const apiService = new ApiService()
  return await apiService.patch(
    `${API_URL_USERS}/auth/${userId}`,
    props
  )
}

function useUpdateUserEmail(userId: number) {
  const query = useMutation({
    mutationFn: (props: IUser) => updateUserEmail(userId, props),
  })
  return query
}
export default useUpdateUserEmail
