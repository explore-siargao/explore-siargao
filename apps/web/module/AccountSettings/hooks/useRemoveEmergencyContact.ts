import { ApiService } from "@/common/service/api"
import { IEmergencyContact, IUser } from "@/common/types/global"
import { API_URL_USERS } from "@repo/constants"
import { useMutation } from "@tanstack/react-query"

export async function removeEmergencyContact(
  personalInfoId: number,
  id: number
) {
  const apiService = new ApiService()
  return await apiService.delete(`${API_URL_USERS}/${personalInfoId}/emergency-contact/${id}`)
}

function useRemoveEmergencyContact(personalInfoId:number) {
  const query = useMutation({
    mutationFn: (props: IEmergencyContact) => removeEmergencyContact(personalInfoId,props?.id as number),
  })
  return query
}
export default useRemoveEmergencyContact
