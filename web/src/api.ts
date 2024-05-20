const BASE_URL = process.env.INFERNO_APP_WALLET_BASE_URL

export const login = async (
  form: Record<string, any>
): Promise<null | string> => {
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })

  if (response.status === 200) {
    const data = await response.json()
    sessionStorage.setItem('token', data.data.token)
    sessionStorage.setItem('user', JSON.stringify(data.data.user))
    return null
  } else {
    const error = await response.json()
    return error.message
  }
}
