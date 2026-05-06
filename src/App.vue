<script setup>
import { watch } from 'vue'
import * as NotificationService from './services/notification.service'
import { useStore } from './composables/useStore'
import { getCurrentUser } from './services/auth.service'

const { store } = useStore()

getCurrentUser().then((user) => {
  store.value.sessionStorage.user = user
})

watch(() => store.error, NotificationService.showError)
</script>

<template>
  <router-view />
</template>
