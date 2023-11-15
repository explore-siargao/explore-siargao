import {API_URL_USERS} from "constants/"
  import { useQuery } from "@tanstack/react-query"
  import { ZT_BackendResponse, ZT_User } from "contract"
  import Cookies from "js-cookie"
  
  type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
    items: ZT_User[]
  }
  
  export async function getAllUsers() {
    const token = Cookies.get("tfl")
    const res = await fetch(`${API_URL_USERS}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    return (await res.json()) as T_DBReturn
  }
  
  function useGetUsers() {
    const query = useQuery(["users"], () => getAllUsers(), {
      refetchOnWindowFocus: false,
    })
    return query
  }
  export default useGetUsers