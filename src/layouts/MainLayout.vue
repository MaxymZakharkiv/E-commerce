<template>
  <TheHeader />
  <router-view></router-view>
</template>

<script>
import TheHeader from '@/components/MainComponents/TheHeader'

export default {
  components: {
    TheHeader,
  },
  name: 'MainLayout',
}
</script>

<style scoped></style>
