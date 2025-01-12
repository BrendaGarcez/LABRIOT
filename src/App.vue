<template>
  <div id="app">
    <header>
      <h1>Meu Projeto Vue</h1>
    </header>
    <AppNavbar />
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2025 - Meu Projeto Vue</p>
    </footer>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
  },
};
</script>
