import { API_URL_USERS } from "@repo/constants"
import { I_User } from "../../../common/types/global"
import { useMutation } from "@tanstack/react-query"
import { ApiService } from "@/common/service/api";

export async function registerUser(props: I_User) {
  const apiService = new ApiService();
  return await apiService.post(`${API_URL_USERS}`, props)
}

function useRegister() {
  const query = useMutation({
    mutationFn: (props: I_User) => registerUser(props),
  })
  return query
}

export default useRegister
