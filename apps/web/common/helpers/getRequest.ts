import { API_ROOT, MOCK_ROOT } from "@repo/constants"

const CACHE_REVALIDATE = 60
export async function getRequest(url: string, isMock?: false) {
  const ROOT_PATH = isMock ? API_ROOT : MOCK_ROOT
  const res = await fetch(`${process.env.API_URL}${ROOT_PATH}${url}`, {
    next: { revalidate: CACHE_REVALIDATE },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const jsonData = await res.json()
  return jsonData
}
