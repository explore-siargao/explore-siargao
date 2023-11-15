import {API_URL_STUDENT_SCHOOLS} from "constants/"
  import { useQuery } from "@tanstack/react-query"
  import { ZT_BackendResponse, ZT_StudentSchoolId } from "contract"
  import Cookies from "js-cookie"
  
  type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
    items: ZT_StudentSchoolId[]
  }
  
  export async function getAllStudentSchoolIds() {
    const token = Cookies.get("tfl")
    const res = await fetch(`${API_URL_STUDENT_SCHOOLS}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    return (await res.json()) as T_DBReturn
  }
  
  function useGetAllStudentSchoolIds() {
    const query = useQuery(["student-schools"], () => getAllStudentSchoolIds(), {
      refetchOnWindowFocus: false,
    })
    return query
  }
  export default useGetAllStudentSchoolIds