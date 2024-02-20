import { API_ROOT } from "@repo/constants"

const CACHE_REVALIDATE = 60
export async function getRequest(url: string) {
  const res = await fetch(`${process.env.API_URL}${API_ROOT}${url}`, {
    next: { revalidate: CACHE_REVALIDATE },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const jsonData = await res.json()
  return jsonData
}
