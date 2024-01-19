import { ApiService } from "@/common/service/api"
import { API_URL_BOOKINGS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"

export async function getAllHighlights() {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_BOOKINGS}/all/highlights`)
}

function useGetAllHighlights() {
  const query = useQuery({
    queryKey: ["highlights"],
    queryFn: () => getAllHighlights(),
    refetchOnWindowFocus: false,
  })
  return query
}
export default useGetAllHighlights
