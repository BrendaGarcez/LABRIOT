<template>
  <div id="app">
    <header>
      <div class = "header-container">
        <div class = "logo">
          <img src = "./assets/logo.png" alt = "Logo">
        </div>
        <AppNavbar />
      </div>
    </header>
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
