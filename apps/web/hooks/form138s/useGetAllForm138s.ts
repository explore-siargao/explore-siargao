import {API_URL_FORM138s} from "constants/"
  import { useQuery } from "@tanstack/react-query"
  import { ZT_BackendResponse, ZT_Form138 } from "contract"
  import Cookies from "js-cookie"
  
  type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
    items: ZT_Form138[]
  }
  
  export async function getAllForm138s() {
    const token = Cookies.get("tfl")
    const res = await fetch(`${API_URL_FORM138s}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    return (await res.json()) as T_DBReturn
  }
  
  function useGetAllForm138s() {
    const query = useQuery(["form138s"], () => getAllForm138s(), {
      refetchOnWindowFocus: false,
    })
    return query
  }
  export default useGetAllForm138s