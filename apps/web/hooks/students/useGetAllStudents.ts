import {API_URL_STUDENTS} from "constants/"
  import { useQuery } from "@tanstack/react-query"
  import { ZT_BackendResponse, ZT_Student } from "contract"
  import Cookies from "js-cookie"
  
  type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
    items: ZT_Student[]
  }
  
  export async function getAllStudents() {
    const token = Cookies.get("tfl")
    const res = await fetch(`${API_URL_STUDENTS}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    return (await res.json()) as T_DBReturn
  }
  
  function useGetAllStudents() {
    const query = useQuery(["students"], () => getAllStudents(), {
      refetchOnWindowFocus: false,
    })
    return query
  }
  export default useGetAllStudents