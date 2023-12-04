import { API_URL_USERS } from "@repo/constants"
import { useQuery } from "@tanstack/react-query"
import { ApiService } from "@/common/service/api"
import { useSession } from "next-auth/react"
import { useParams } from "next/navigation"

export type T_VerifySession = { email: string; type: string }

export async function verifySession(props: T_VerifySession) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_USERS}/auth/verify-session`, props)
}

function useVerifySession() {
  const params = useParams()
  const { data: session } = useSession()
  const query = useQuery({
    queryKey: ["session"],
    queryFn: () =>
      verifySession({
        type: params.type as string,
        email: session?.user?.email as string,
      }),
    enabled: !!session && !!params.type,
  })
  return query
}

export default useVerifySession
