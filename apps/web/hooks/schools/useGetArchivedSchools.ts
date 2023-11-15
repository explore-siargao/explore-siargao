import {API_URL_SCHOOLS} from "constants/"
  import { useQuery } from "@tanstack/react-query"
  import { ZT_BackendResponse, ZT_School } from "contract"
  import Cookies from "js-cookie"
  
  type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
    items: ZT_School[]
  }
  
  export async function getAllArchivedSchools(id:string | null) {
    const token = Cookies.get("tfl")
    const res = await fetch(`${API_URL_SCHOOLS}/archived/all/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    return (await res.json()) as T_DBReturn
  }
  
  function useGetArchivedSchools(id:string | null) {
    const query = useQuery(["schools"], () => getAllArchivedSchools(id), {
      refetchOnWindowFocus: false,
    })
    return query
  }
  export default useGetArchivedSchools