import { API_URL_USERS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"
import { ApiService } from "@/common/service/api"
import { RegistrationType } from "@/common/types/global"

export type T_Register = {
  email: string
  firstName: string
  lastName: string
  birthDate: string
  registrationType: RegistrationType
  password?: string
}

export async function registerUser(props: T_Register) {
  const apiService = new ApiService()
  return await apiService.post(`${API_URL_USERS}/auth/register`, props)
}

function useRegister() {
  const query = useMutation({
    mutationFn: (props: T_Register) => registerUser(props),
  })
  return query
}

export default useRegister
