enum EContentType {
  JSON = "application/json",
  formData = "multipart/form-data",
}

export class ApiService {
  private BASE_URL: string | undefined

  constructor(
    source: "main" | "auth" | "mock" = "main"
  ) {
    if (source === "main") {
      this.BASE_URL = process.env.API_URL
    } else if (source === "auth") {
      this.BASE_URL = process.env.API_AUTH_URL
    } else {
      this.BASE_URL = process.env.API_MOCK_URL
    }
  }

  private constructOtherOptions(isFormData = false, removeContentType = false) {
    const headers = {
      ...(!removeContentType && {
        "Content-Type": isFormData ? EContentType.formData : EContentType.JSON,
      }),
    } as Record<string, any>
    const options = {
      headers,
      credentials: 'include' as RequestCredentials,
    }
    return options
  }

  async get<T = any>(
    endpoint: string,
    params?: Record<string, any>,
    signal?: AbortSignal
  ): Promise<T | any> {
    const reqParams = new URLSearchParams(params).toString()
    const otherOptions = this.constructOtherOptions()

    const res = fetch(
      `${this.BASE_URL}${endpoint}${params ? `?${reqParams}` : ""}`,
      {
        ...otherOptions,
        ...(signal ? { signal } : {}),
      }
    )

    return (await res).json()
  }

  async post<T = any>(endpoint: string, body: any): Promise<T> {
    const otherOptions = this.constructOtherOptions()
    const res = fetch(`${this.BASE_URL}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      ...otherOptions
    })
    return (await res).json()
  }

  async patch(endpoint: string, body: any) {
    const otherOptions = this.constructOtherOptions()

    const res = fetch(`${this.BASE_URL}${endpoint}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      ...otherOptions,
    })
    return (await res).json()
  }

  async delete(endpoint: string) {
    const otherOptions = this.constructOtherOptions()

    const res = fetch(`${this.BASE_URL}${endpoint}`, {
      method: "DELETE",
      ...otherOptions,
    })
    return (await res).json()
  }
}
