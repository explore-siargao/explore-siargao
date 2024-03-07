import { API_URL_LISTINGS } from "@/common/constants/api-routes"
import { ApiService } from "@/common/service/api"
import { useQuery } from "@tanstack/react-query"

export async function getListings(page: number) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_LISTINGS}/paginated?page=${page}`)
}

function useGetListings(page: number) {
  const query = useQuery({
    queryKey: ["listings", page],
    queryFn: () => getListings(page),
  })
  return query
}

export default useGetListings
