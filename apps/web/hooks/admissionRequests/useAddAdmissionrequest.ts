import { API_URL_ADMISSION_REQUESTS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import { ZT_AdmissionRequest, ZT_School } from "contract"
import Cookies from "js-cookie"

export async function addAdmissionrequest(props: any) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_ADMISSION_REQUESTS}`, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return await res.json()
}

function useAddAdmissionrequest() {
  const query = useMutation((props: any) => addAdmissionrequest(props))
  return query
}

export default useAddAdmissionrequest
