import { ApiService } from "@/common/service/api"
import { API_URL_LISTINGS } from "@/common/constants"
import { useQuery } from "@tanstack/react-query"

export async function getReportById(id: number | undefined) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_LISTINGS}/reports/id/${id}`)
}

function useGetReport(id: number | undefined) {
  const query = useQuery({
    queryKey: ["reports", id],
    queryFn: () => getReportById(id),
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetReport
