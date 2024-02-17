import { ApiService } from "@/common/service/api"
import { API_URL_COUNTRIES } from "@/common/constants"
import { useQuery } from "@tanstack/react-query"

export async function getCounties() {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_COUNTRIES}`)
}

function useGetCountries() {
  const query = useQuery({
    queryKey: ["countries"],
    queryFn: () => getCounties(),
    refetchOnWindowFocus: false,
  })

  return query
}
export default useGetCountries
