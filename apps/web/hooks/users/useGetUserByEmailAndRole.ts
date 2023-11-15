import {API_URL_USERS} from "constants/"
  import { useQuery } from "@tanstack/react-query"
  import { ZT_BackendResponse, ZT_User } from "contract"
  import Cookies from "js-cookie"
  
  type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
    items: ZT_User[]
  }
  
  export async function getUserByEmailAndRole(email:string) {
    const token = Cookies.get("tfl")
    const res = await fetch(`${API_URL_USERS}/admin/Admin/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    return (await res.json()) as T_DBReturn
  }
  
  function useGetUserByEmailAndRole(email:string) {
    const query = useQuery(["users"], () => getUserByEmailAndRole(email), {
      refetchOnWindowFocus: false,
    })
    return query
  }
  export default useGetUserByEmailAndRole