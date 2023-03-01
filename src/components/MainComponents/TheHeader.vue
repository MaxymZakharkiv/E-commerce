<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <router-link class="logo" :to="{ name: 'main-page' }">Logo</router-link>
        <nav class="nav">
          <router-link class="link-nav" :to="{ name: 'main-page' }"
            >Category</router-link
          >
          <router-link class="link-nav" :to="{ name: 'my-account' }"
            >My profile</router-link
          >
          <router-link class="link-nav" :to="{ name: 'my-account' }"
            >Cart</router-link
          >
          <router-link class="link-nav" :to="{ name: 'my-account' }"
            >Sign Up</router-link
          >
          <router-link class="link-nav" :to="{ name: 'my-account' }"
            >Log In</router-link
          >
          <router-link class="link-nav" :to="{ name: 'my-account' }"
            >Log Out</router-link
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style scoped>
.header {
  background-color: #303030;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.nav > *:not(:last-child) {
  margin-right: 30px;
}

.logo {
  font-size: 24px;
  font-weight: 800;
  color: white;
  cursor: pointer;
  letter-spacing: 1px;
  text-decoration: none;
}
.logo:hover {
  color: #e00226;
  transition: all 0.35s ease;
}

.link-nav {
  text-decoration: none;
  color: white;
  font-size: 16px;
  border-bottom: 2px solid transparent;
  padding-bottom: 5px;
}
.link-nav:hover {
  color: #e00226;
  border-color: #e00226;
  transition: all 0.35s linear;
}
</style>
