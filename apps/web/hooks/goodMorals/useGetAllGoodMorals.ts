import { API_URL_GOOD_MORALS} from "constants/"
  import { useQuery } from "@tanstack/react-query"
  import { ZT_BackendResponse, ZT_GoodMoral } from "contract"
  import Cookies from "js-cookie"
  
  type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
    items: ZT_GoodMoral[]
  }
  
  export async function getAllGoodMorals() {
    const token = Cookies.get("tfl")
    const res = await fetch(`${API_URL_GOOD_MORALS}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    return (await res.json()) as T_DBReturn
  }
  
  function useGetAllGoodMorals() {
    const query = useQuery(["good-moral"], () => getAllGoodMorals(), {
      refetchOnWindowFocus: false,
    })
    return query
  }
  export default useGetAllGoodMorals