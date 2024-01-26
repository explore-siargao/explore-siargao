import { ApiService } from "@/common/service/api"
import { API_URL_USERS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function updateLanguage(
  personalInfoId: number | null,
  props: string
) {
  const apiService = new ApiService()
  return await apiService.patch(
    `${API_URL_USERS}/personal-info/language/${personalInfoId}`,
    props
  )
}

function useUpdateLanguage(personalInfoId: number | null) {
  const query = useMutation({
    mutationFn: (props: string) => updateLanguage(personalInfoId, props),
  })
  return query
}
export default useUpdateLanguage
