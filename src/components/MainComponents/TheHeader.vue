<template>
  <nav class="nav">
    <router-link :to="{ name: 'main-page' }">Main</router-link>
    <router-link :to="{ name: 'my-account' }">My profile</router-link>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style scoped>
.nav > *:not(:last-child) {
  margin-right: 10px;
}
</style>
