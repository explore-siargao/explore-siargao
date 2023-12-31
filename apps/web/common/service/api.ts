import Cookies from "js-cookie"

enum EContentType {
  JSON = "application/json",
  formData = "multipart/form-data",
}

export class ApiService {
  private BASE_URL: string | undefined
  private isAuthRequired: boolean = false

  constructor(
    hasAuthentication = true,
    source: "main" | "auth" | "mock" = "main"
  ) {
    if (source === "main") {
      this.BASE_URL = process.env.API_URL
    } else if (source === "auth") {
      this.BASE_URL = process.env.API_AUTH_URL
    } else {
      this.BASE_URL = process.env.API_MOCK_URL
    }
    this.isAuthRequired = hasAuthentication
  }

  private constructHeader(isFormData = false, removeContentType = false) {
    const accessToken = Cookies.get("accessToken")

    const res = {
      ...(!removeContentType && {
        "Content-Type": isFormData ? EContentType.formData : EContentType.JSON,
      }),
      ...(accessToken && this.isAuthRequired
        ? { Authorization: `Bearer ${accessToken}` }
        : {}),
    } as Record<string, any>

    return res
  }

  async get<T = any>(
    endpoint: string,
    params?: Record<string, any>,
    signal?: AbortSignal
  ): Promise<T | any> {
    const reqParams = new URLSearchParams(params).toString()
    const header = this.constructHeader()

    const res = fetch(
      `${this.BASE_URL}${endpoint}${params ? `?${reqParams}` : ""}`,
      {
        headers: header,
        ...(signal ? { signal } : {}),
      }
    )

    return (await res).json()
  }

  async post<T = any>(endpoint: string, body: any): Promise<T> {
    const header = this.constructHeader()
    const res = fetch(`${this.BASE_URL}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: header,
    })
    return (await res).json()
  }

  async patch(endpoint: string, body: any) {
    const header = this.constructHeader()

    const res = fetch(`${this.BASE_URL}${endpoint}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: header,
    })
    return (await res).json()
  }

  async delete(endpoint: string, payload: { [key: string]: string }) {
    const header = this.constructHeader()

    const res = fetch(`${this.BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers: header,
    })
    return (await res).json()
  }
}
