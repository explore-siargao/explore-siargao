import { API_URL_SCHOOLS } from "constants/"
import { useMutation } from "@tanstack/react-query"
import { ZT_School } from "contract"
import Cookies from "js-cookie"

export async function addSchool(props: ZT_School) {
  const token = Cookies.get("tfl")
  const res = await fetch(`${API_URL_SCHOOLS}`, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "content-type": "application/json",
    },
  })
  return await res.json()
}

function useAddSchool() {
  const query = useMutation((props: ZT_School) => addSchool(props))
  return query
}

export default useAddSchool