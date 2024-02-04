import { API_URL_USERS } from "@/common/constants"
import { useQuery } from "@tanstack/react-query"
import { ApiService } from "@/common/service/api"
import { useSession } from "next-auth/react"
import { useParams } from "next/navigation"
import { THREE_MINUTES } from "../constants"

export type T_VerifySignIn = { email: string; type: string }

export async function verifySignIn(props: T_VerifySignIn) {
  const apiService = new ApiService()
  return await apiService.get(`${API_URL_USERS}/auth/verify-sign-in`, props)
}

function useVerifySignIn() {
  const params = useParams()
  const { data: session } = useSession()
  const query = useQuery({
    queryKey: ["sign-in"],
    queryFn: () =>
      verifySignIn({
        type: params.type as string,
        email: session?.user?.email as string,
      }),
    enabled: !!session && !!params.type,
    staleTime: THREE_MINUTES,
  })
  return query
}

export default useVerifySignIn
