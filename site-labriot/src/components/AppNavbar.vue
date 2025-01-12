<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">Sobre</router-link>
    <router-link to="/contact">Contato</router-link>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
}
</style>
