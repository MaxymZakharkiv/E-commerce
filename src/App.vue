<template>
  <router-view />
  <br />
  <!--  {{ selectedOption }}-->
  <!--  test12345 abcd2jgA@-->
  {{ selectedOption }}
  <MCheckboxGroup
    v-model:value="selectedOption"
    :list-options="info"
    name="name"
  />
</template>

<script>
import MCheckboxGroup from '@/components/ui-kit/Checkbox/MCheckboxGroup'

export default {
  components: {
    MCheckboxGroup,
  },

  data() {
    return {
      test: false,
      selectedOption: [],
      info: [
        { id: 1, value: 'value 1' },
        { id: 2, value: 'value 2' },
        { id: 3, value: 'value 3' },
        { id: 4, value: 'value 4' },
        { id: 5, value: 'value 5' },
      ],
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
