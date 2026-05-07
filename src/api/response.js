import { showError, showSuccess } from '../services/notification.service'
import { Router } from '../router'

export function responseInterceptor() {
  async function onFullfilled(response) {
    if (response.config.successMessage) {
      showSuccess(response.config.successMessage)
    }

    if (response.config.fullResponse) {
      return response
    } else {
      return response.data
    }
  }

  async function onRejected(error) {
    if (!error.response) {
      showError('Нет соединения с сервером')
      return Promise.reject(error)
    }

    const { data } = error.response

    let data_error = data?.error || data?.errors || data?.error?.message || 'Произошла ошибка'

    if (error.config?.showError !== false) {
      showError(data_error)
    }

    if (error.response.status === 401) {
      Router.push({ name: 'login' })
    }

    if (error.response.status === 403) {
      Router.push({ name: 'forbidden' })
    }
    return Promise.reject(error)
  }

  return {
    onFullfilled,
    onRejected,
  }
}
