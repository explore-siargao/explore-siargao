import {API_URL_ADMISSION_REQUESTS} from "constants/"
  import { useQuery } from "@tanstack/react-query"
  import { ZT_AdmissionRequest, ZT_BackendResponse } from "contract"
  import Cookies from "js-cookie"
  
  type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
    items: ZT_AdmissionRequest[]
  }
  
  export async function getAllAdmissionRequests() {
    const token = Cookies.get("tfl")
    const res = await fetch(`${API_URL_ADMISSION_REQUESTS}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    return (await res.json()) as T_DBReturn
  }
  
  function useGetAllAdmissionRequests() {
    const query = useQuery(["admission-requests"], () => getAllAdmissionRequests(), {
      refetchOnWindowFocus: false,
    })
    return query
  }
  export default useGetAllAdmissionRequests