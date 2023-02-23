<template>
  <div>
    <div>Sign in</div>
    <div class="form">
      <div>
        <m-input placeholder="Login" v-model="formSignIn.username"/>
      </div>
      <div>
        <m-input placeholder="Password" v-model="formSignIn.password" />
      </div>
      <div>
        <m-button rounded @click="sentDataToServer">Sign in</m-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignIn',
  components: {},

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
      this.$router.push({
        name: 'main-page',
      })
    },
  },
}
</script>

<style scoped></style>
