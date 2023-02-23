<template>
  <div>
    <div>Sign Up</div>
    <div class="form">
      <m-input v-model="formSignUp.username" placeholder="username" />

      <m-input v-model="formSignUp.last_name" placeholder="last_name" />
      <m-input v-model="formSignUp.first_name" placeholder="first_name" />
      <m-input v-model="formSignUp.middle_name" placeholder="middle_name" />
      <m-input v-model="formSignUp.password" placeholder="password" />
      <m-input
        v-model="formSignUp.confirm_password"
        placeholder="confirm_password"
      />
      <div>
        <label for="male">Male</label>
        <input
          id="male"
          name="gender"
          v-model="formSignUp.gender"
          value="male"
          type="radio"
        />
        <label for="female">Female</label>
        <input
          id="female"
          name="gender"
          v-model="formSignUp.gender"
          type="radio"
          value="female"
        />
      </div>
      <m-input v-model="formSignUp.email" placeholder="email" />
      <div>
        <m-button @click="sentDataToServer" rounded>Sign up</m-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignUp',

  data() {
    return {
      formSignUp: {
        username: null,
        last_name: null,
        first_name: null,
        middle_name: null,
        password: null,
        confirm_password: null,
        gender: null,
        email: null,
      },
    }
  },
  methods: {
    ...mapActions('auth', ['signUpUser']),
    async sentDataToServer() {
      await this.signUpUser(this.formSignUp)
      this.$router.push({ name: 'sign-in' })
    },
  },
}
</script>

<style scoped></style>
