import { API_URL_USERS } from "@repo/constants"
import { I_User } from "@/common/types/global"
import { useMutation } from "@tanstack/react-query"
import { ApiService } from "@/common/service/api"

export async function loginUser(props: I_User) {
  const apiService = new ApiService()
  return await apiService.post(`${API_URL_USERS}/auth/manual`, props)
}
function useLogin() {
  const query = useMutation({
    mutationFn: (props: I_User) => loginUser(props),
  })
  return query
}

export default useLogin
