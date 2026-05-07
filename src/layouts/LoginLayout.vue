<script setup>
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'

let { onSubmit } = useAuth()

function onOk() {
  onSubmit(form.value)
  form.value.pwd = ''
}

const form = ref({
  username: '',
  password: '',
})
</script>

<template>
  <q-layout padding>
    <div class="row justify-center align-center">
      <q-card style="margin-top: 10vh; width: 360px" flat bordered>
        <q-card-section>
          <q-form @submit.prevent="onOk()" class="q-gutter-md">
            <div class="text-h6">Вход в систему</div>
            <q-input v-model="form.username" color="primary" label="Логин" autofocus />
            <q-input v-model="form.password" color="primary" label="Пароль" type="password" />
            <div>
              <q-btn
                label="Войти"
                type="submit"
                color="primary"
                class="full-width"
                :disable="!(form.username != '' && form.password != '')"
                unelevated
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-layout>
</template>
