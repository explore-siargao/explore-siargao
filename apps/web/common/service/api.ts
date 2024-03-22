import { API_ROOT, MOCK_ROOT } from "@repo/constants"
import { T_BackendResponse } from "@repo/contract"
import { apiAuthUrl, apiUrl, mockUrl } from "@repo/env-vars"
export class ApiService {
  private BASE_URL: string | undefined
  private ROOT_PATH: string | undefined

  constructor(source: "main" | "auth" | "mock" = "main") {
    if (source === "main") {
      this.BASE_URL = apiUrl
      this.ROOT_PATH = API_ROOT
    } else if (source === "auth") {
      this.BASE_URL = apiAuthUrl
      this.ROOT_PATH = API_ROOT
    } else {
      this.BASE_URL = mockUrl
      this.ROOT_PATH = MOCK_ROOT
    }
  }

  private constructOptions(removeContentType = false) {
    const headers = {
      ...(!removeContentType && {
        "Content-Type": "application/json",
      }),
    } as Record<string, any>
    const options = {
      headers,
      credentials: "include" as RequestCredentials,
    }
    return options
  }

  async get<T = T_BackendResponse>(
    endpoint: string,
    params?: Record<string, any>,
    signal?: AbortSignal
  ): Promise<T> {
    const reqParams = new URLSearchParams(params).toString()
    const otherOptions = this.constructOptions()
    const res = fetch(
      `${this.BASE_URL}${this.ROOT_PATH}${endpoint}${params ? `?${reqParams}` : ""}`,
      {
        ...otherOptions,
        ...(signal ? { signal } : {}),
      }
    )
    return (await res).json()
  }

  async post<T = T_BackendResponse>(
    endpoint: string,
    body: any,
    raw?: boolean,
    removeContentType?: boolean
  ): Promise<T> {
    const otherOptions = this.constructOptions(removeContentType)
    const res = fetch(`${this.BASE_URL}${this.ROOT_PATH}${endpoint}`, {
      method: "POST",
      body: !raw ? JSON.stringify(body) : body,
      ...otherOptions,
    })
    return (await res).json()
  }

  async patch<T = T_BackendResponse>(
    endpoint: string,
    body?: any,
    raw?: boolean,
    removeContentType?: boolean
  ): Promise<T> {
    const otherOptions = this.constructOptions(removeContentType)
    const res = fetch(`${this.BASE_URL}${this.ROOT_PATH}${endpoint}`, {
      method: "PATCH",
      body: !raw ? JSON.stringify(body) : body,
      ...otherOptions,
    })
    return (await res).json()
  }

  async delete<T = T_BackendResponse>(
    endpoint: string,
    body?: any,
    raw?: boolean,
    removeContentType?: boolean
  ): Promise<T> {
    const otherOptions = this.constructOptions(removeContentType)
    const res = fetch(`${this.BASE_URL}${this.ROOT_PATH}${endpoint}`, {
      method: "DELETE",
      body: !raw ? JSON.stringify(body) : body,
      ...otherOptions,
    })
    return (await res).json()
  }
}
