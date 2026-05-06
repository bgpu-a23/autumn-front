import { watch, ref } from 'vue'

let STORAGE_KEY = 'autumn'

let store = ref({
  error: null,

  localStorage: {
    //
  },

  sessionStorage: {
    user: null,
  },
})

Object.assign(store.value.localStorage, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'))

Object.assign(store.value.sessionStorage, JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}'))

watch(
  () => store.value.localStorage,
  () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.value.localStorage))
  },
  { deep: true },
)

watch(
  () => store.value.sessionStorage,
  () => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(store.value.sessionStorage))
  },
  { deep: true },
)

export function useStore() {
  return {
    store,
  }
}
