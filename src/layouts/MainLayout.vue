<template>
  <TheHeader />
  <main class="content">
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from '@/components/MainComponents/TheHeader'
import TheFooter from '@/components/MainComponents/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  name: 'MainLayout',
}
</script>

<style scoped>
.content {
  min-height: calc(100vh - 120px);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
