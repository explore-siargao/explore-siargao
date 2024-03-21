import { ApiService } from "@/common/service/api"
import { API_URL_RESERVATION } from "@/common/constants"
import { useQuery } from "@tanstack/react-query"

export async function getReservationByHostId(hostId: number | undefined) {
  const apiService = new ApiService("mock")
  return await apiService.get(`${API_URL_RESERVATION}/host/${hostId}`)
}

function useGetReservationsByHostId(hostId: number | undefined) {
  const query = useQuery({
    queryKey: ["properties", hostId],
    queryFn: () => getReservationByHostId(hostId),
    refetchOnWindowFocus: false,
    enabled: !!hostId,
  })
  return query
}
export default useGetReservationsByHostId
