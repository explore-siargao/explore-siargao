import { API_URL_SCHOOLS } from "constants/"
import { useQuery } from "@tanstack/react-query"
import { ZT_BackendResponse, ZT_School } from "contract"
import Cookies from "js-cookie"

type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
  items: ZT_School[]
}

export async function getAllSchools(search: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_SCHOOLS}/search/school/${search}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return (await res.json()) as T_DBReturn
}

function useGetAllSchools(search: string | undefined) {
  const query = useQuery(["schools"], () => getAllSchools(search), {
    refetchOnWindowFocus: false,
  })
  return query
}
export default useGetAllSchools
