import { ApiService } from "@/common/service/api"
import { IEmergencyContact } from "@/common/types/global"
import { API_URL_USERS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function addEmergencyContact(
  personId: number | undefined,
  props: IEmergencyContact
) {
  const apiService = new ApiService()
  return await apiService.post(
    `${API_URL_USERS}/${personId}/emergency-contact/add/`,
    props
  )
}

function useAddEmergencyContact(personId: number) {
  const query = useMutation({
    mutationFn: (props: IEmergencyContact) => addEmergencyContact(personId, props),
  })
  return query
}
export default useAddEmergencyContact
