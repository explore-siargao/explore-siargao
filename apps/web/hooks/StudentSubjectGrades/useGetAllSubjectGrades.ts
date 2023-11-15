import {API_URL_STUDENTS, API_URL_STUDENT_SUBJECT_GRADES} from "constants/"
  import { useQuery } from "@tanstack/react-query"
  import { ZT_BackendResponse, ZT_Student, ZT_StudentSubjectGrades } from "contract"
  import Cookies from "js-cookie"
  
  type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
    items: ZT_StudentSubjectGrades[]
  }
  
  export async function getAllStudentSubjectGrades() {
    const token = Cookies.get("tfl")
    const res = await fetch(`${API_URL_STUDENT_SUBJECT_GRADES}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    return (await res.json()) as T_DBReturn
  }
  
  function useGetAllStudentSubjectGrades() {
    const query = useQuery(["student-subject-grades"], () => getAllStudentSubjectGrades(), {
      refetchOnWindowFocus: false,
    })
    return query
  }
  export default useGetAllStudentSubjectGrades