import { ApiService } from "@/common/service/api"
import { API_URL_BOOKABLE_UNIT } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"
import { T_BookableUnit } from "@repo/contract"

export async function updateProperty(id: number | null, props: T_BookableUnit) {
  const apiService = new ApiService("mock")
  return await apiService.patch(`${API_URL_BOOKABLE_UNIT}/${id}`, props)
}

function updateBookableUnit(id: number | null) {
  const query = useMutation({
    mutationFn: (props: T_BookableUnit) => updateProperty(id, props),
  })
  return query
}
export default updateBookableUnit
