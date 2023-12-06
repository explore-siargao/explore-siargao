import { API_URL_USERS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"
import Cookies from "js-cookie"

export async function getPersonalInfo(userId: number | undefined) {
  const token = Cookies.get("accessToken")
  const res = await fetch(`${API_URL_USERS}/personalInfo/${userId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetPersonalInfo(userId: number | undefined) {

const query = useQuery({
    queryKey:["personal-info", userId],
    queryFn:()=>getPersonalInfo(userId),
    refetchOnWindowFocus: false,
    enabled: !!userId
})
  return query
}
export default useGetPersonalInfo