import { ApiService } from "@/common/service/api"
import { IPersonalInfo } from "@/common/types/global"
import { API_URL_USERS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

export async function updatePersonalInfo(userId: number | undefined, props: IPersonalInfo) {
  const apiService = new ApiService()
  return await apiService.patch(
    `${API_URL_USERS}/personal-info/${userId}`,
    props
  )
}

function useUpdatePersonalInfo(userId: number) {
  const query = useMutation({
    mutationFn: (props: IPersonalInfo) => updatePersonalInfo(userId, props),
  })
  return query
}
export default useUpdatePersonalInfo
