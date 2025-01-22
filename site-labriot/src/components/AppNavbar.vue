<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/projetos">Projetos</router-link>
    <router-link to="/contato">Contato</router-link>
    <router-link to="/blog">Blog</router-link>
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
