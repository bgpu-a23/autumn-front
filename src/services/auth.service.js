import { api } from '../api/api.js'

export async function login({ username, password }) {
  return api.post('/login', null, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    params: { username, password },
  })
}

export async function logout() {
  return api.get('/logout')
}

export function getCurrentUser() {
  return api.get('/current-user')
}
