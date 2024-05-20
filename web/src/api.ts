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

export const register = async (
  form: Record<string, any>
): Promise<null | string> => {
  const response = await fetch(`${BASE_URL}/api/auth/register`, {
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

export const balance = async (token: string): Promise<null | string> => {
  const response = await fetch(`${BASE_URL}/api/wallet/balance`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-type': 'application/json; charset=UTF-8'
    }
  })

  if (response.status === 200) {
    const data = await response.json()

    return data.data.balance
  } else {
    const error = await response.json()
    return error.message
  }
}

export const transactions = async (token: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}/api/transaction`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-type': 'application/json; charset=UTF-8'
    }
  })

  if (response.status === 200) {
    const data = await response.json()

    return data.data
  } else {
    const error = await response.json()
    return error.message
  }
}

export const logout = async (token: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}/api/auth/logout`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-type': 'application/json; charset=UTF-8'
    }
  })

  if (response.status === 200) {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('token')
  } else {
    const error = await response.json()
    return error.message
  }
}
