<template>
  <div>User Account</div>
  <div>{{ getProfile }}</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserAccount',
  created() {
    this.getUserProfile()
  },
  computed: {
    ...mapGetters('auth', ['getProfile']),
  },
  methods: {
    ...mapActions('auth', ['getUserProfile']),
  },
}
</script>

<style scoped></style>
