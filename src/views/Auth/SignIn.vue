<template>
  <div>
    <div>Sign in</div>
    <div class="form">
      <div>
        <input
          class="login"
          type="text"
          placeholder="Login"
          v-model="formSignIn.username"
        />
      </div>
      <div>
        <input
          class="password"
          type="text"
          placeholder="Password"
          v-model="formSignIn.password"
        />
      </div>
      <div>
        <button class="btn" @click="sentDataToServer">Sign in</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignIn',
  data() {
    return {
      formSignIn: {
        username: null,
        password: null,
      },
    }
  },
  methods: {
    ...mapActions('auth', ['signInUser']),
    async sentDataToServer() {
      const formSignIn = new FormData()
      formSignIn.append('username', this.formSignIn.username)
      formSignIn.append('password', this.formSignIn.password)
      await this.signInUser(formSignIn)
      this.$router.push({ name: 'sign-up' })
    },
  },
}
</script>

<style scoped></style>
