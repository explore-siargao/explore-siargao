import {API_URL_BIRTH_CERTIFICATES} from "constants/"
  import { useQuery } from "@tanstack/react-query"
  import { ZT_BackendResponse, ZT_BirthCertificate } from "contract"
  import Cookies from "js-cookie"
  
  type T_DBReturn = Omit<ZT_BackendResponse, "items"> & {
    items: ZT_BirthCertificate[]
  }
  
  export async function getAllBirthCertificates() {
    const token = Cookies.get("tfl")
    const res = await fetch(`${API_URL_BIRTH_CERTIFICATES}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    return (await res.json()) as T_DBReturn
  }
  
  function useGetAllBirthcertificates() {
    const query = useQuery(["birth-certificates"], () => getAllBirthCertificates(), {
      refetchOnWindowFocus: false,
    })
    return query
  }
  export default useGetAllBirthcertificates