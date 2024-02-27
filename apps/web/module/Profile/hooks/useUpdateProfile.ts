import { ApiService } from "@/common/service/api"
import { API_URL_USERS } from "@/common/constants"
import { useMutation } from "@tanstack/react-query"

interface ProfileProps {
  imageKey?:string,
  school?: string
  work?: string
  live?: string
  language?: string
  born?: string
  favoriteSong?: string
  obsessedWith?: string
  funFact?: string
  uselessSkill?: string
  biography?: string
  spendTime?: string
  pets?: string
  aboutMe?: string
}
export async function updateProfile(
  userId: number | null,
  props: ProfileProps
) {
  const apiService = new ApiService()
  return await apiService.patch(`${API_URL_USERS}/${userId}/profile`, props)
}

function useUpdateProfile(userId: number | null) {
  const query = useMutation({
    mutationFn: (props: ProfileProps) => updateProfile(userId, props),
  })
  return query
}
export default useUpdateProfile
