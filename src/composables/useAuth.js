import * as AuthService from "../services/auth.service";


export function useAuth() {

async function onSubmit(form) {
    await AuthService.login(form);
    router.push("/");
  }

  async function onLogout() {
    sessionStorage.clear();
    await AuthService.logout();
    router.push("/login");
  }

  async function currentUser() {
    return await api.get(`/current-user`);
  }

  return {
    onSubmit,
    onLogout,
    currentUser,
  };

}