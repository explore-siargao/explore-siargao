import { API_ROOT, MOCK_ROOT } from "@repo/constants"

const CACHE_REVALIDATE = 60
export async function getRequest(url: string, isMock?: boolean) {
  const ROOT_PATH = isMock ? MOCK_ROOT : API_ROOT
  const res = await fetch(`${process.env.API_URL}${ROOT_PATH}${url}`, {
    next: { revalidate: CACHE_REVALIDATE },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const jsonData = await res.json()
  return jsonData
}
