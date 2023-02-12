<template>
  <div>
    <div>Sign Up</div>
    <div class="form">
      <div>
        <input
          v-model="formSignUp.username"
          type="text"
          placeholder="username"
        />
      </div>
      <div>
        <input
          v-model="formSignUp.last_name"
          type="text"
          placeholder="last_name"
        />
      </div>
      <div>
        <input
          v-model="formSignUp.first_name"
          type="text"
          placeholder="first_name"
        />
      </div>
      <div>
        <input
          v-model="formSignUp.middle_name"
          type="text"
          placeholder="middle_name"
        />
      </div>
      <div>
        <input
          v-model="formSignUp.password"
          type="text"
          placeholder="password"
        />
      </div>
      <div>
        <input
          v-model="formSignUp.confirm_password"
          type="text"
          placeholder="confirm_password"
        />
      </div>
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
      <div>
        <input v-model="formSignUp.email" type="text" placeholder="email" />
      </div>
      <div>
        <button class="btn" @click="sentDataToServer">Sign up</button>
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
