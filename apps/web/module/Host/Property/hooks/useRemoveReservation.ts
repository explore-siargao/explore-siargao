import { ApiService } from "@/common/service/api"
import { API_URL_RESERVATION } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"
import { T_Reservation } from "@repo/contract"

export async function removeReservation(id: number | undefined) {
  const apiService = new ApiService("mock")
  return await apiService.delete(`${API_URL_RESERVATION}/${id}`)
}
function useRemoveReservation() {
  const query = useMutation({
    mutationFn: (props: T_Reservation) => removeReservation(props.id),
  })
  return query
}
export default useRemoveReservation
