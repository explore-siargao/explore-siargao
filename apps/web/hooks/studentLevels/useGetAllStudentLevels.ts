import {API_URL_STUDENT_LEVELS} from "constants/"
  import { useQuery } from "@tanstack/react-query"
  import { ZT_BackendResponse, ZT_StudentLevel } from "contract"
  import Cookies from "js-cookie"
  
  type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
    items: ZT_StudentLevel[]
  }
  
  export async function getAllStudentLevels() {
    const token = Cookies.get("tfl")
    const res = await fetch(`${API_URL_STUDENT_LEVELS}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    return (await res.json()) as T_DBReturn
  }
  
  function useGetAllStudentLevels() {
    const query = useQuery(["student-levels"], () => getAllStudentLevels(), {
      refetchOnWindowFocus: false,
    })
    return query
  }
  export default useGetAllStudentLevels