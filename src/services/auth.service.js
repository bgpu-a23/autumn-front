import { api } from "../api/api.js";

export async function login(params) {
  return api.post("/login", params);
}

export async function logout() {
  return api.post("/logout");
}

export function getCurrentUser() {
  return api.get("/current-user");
}