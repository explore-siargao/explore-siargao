import {API_URL_DIPLOMAS} from "constants/"
  import { useQuery } from "@tanstack/react-query"
  import { ZT_BackendResponse, ZT_Diploma } from "contract"
  import Cookies from "js-cookie"
  
  type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
    items: ZT_Diploma[]
  }
  
  export async function getAllDiplomas() {
    const token = Cookies.get("tfl")
    const res = await fetch(`${API_URL_DIPLOMAS}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    return (await res.json()) as T_DBReturn
  }
  
  function useGetAllDiplomas() {
    const query = useQuery(["diplomas"], () => getAllDiplomas(), {
      refetchOnWindowFocus: false,
    })
    return query
  }
  export default useGetAllDiplomas