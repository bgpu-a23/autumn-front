import * as AuthService from '../services/auth.service'
import { useRouter } from 'vue-router'

export function useAuth() {
  const router = useRouter()

  async function onSubmit(form) {
    await AuthService.login(form)
    router.push('/')
  }

  async function onLogout() {
    sessionStorage.clear()
    await AuthService.logout()
    router.push('/login')
  }

  return {
    onSubmit,
    onLogout,
  }
}
