<template>
  <router-view />
  <br />
  <!--  test12345 abcd2jgA@-->
  {{ test }}
  <m-radio
    v-model:checked="test"
    name="name"
    id="id"
    label="something label text"
  />
</template>

<script>
export default {
  data() {
    return {
      test: false,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
