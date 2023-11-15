import { useQuery } from "@tanstack/react-query"
import { API_URL_BIRTH_CERTIFICATES } from "constants/"
import Cookies from "js-cookie"

export async function getBirthcertificate(id: string | undefined) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_BIRTH_CERTIFICATES}/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useGetBirthCertificate(id: string | undefined) {
  const query = useQuery(["birth-certificate", id], () => getBirthcertificate(id), {
    refetchOnWindowFocus: false,
    enabled: !!id,
  })
  return query
}
export default useGetBirthCertificate