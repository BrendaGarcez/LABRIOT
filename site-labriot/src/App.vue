<template>
  <div id="app">
    <header>
      <AppNavbar />
      <div class = "header-container">
        <div class = "navbar-center">
          <img src = "./assets/logo1.png" alt = "Logo">
        </div>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <div class="footer-container">
          <div class="logo">
              <img src="./assets/logo2.png" alt="Logo">
          </div>
          <div class="footer-info">
              <p>© 2025 - Laboratório de Robótica e IoT</p>
              <p>Email: contato@labriot.com </p>
              <p>| Telefone: (41) 1234-5678</p>
              <div class="social-media">
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
              </div>
          </div>
      </div>
      <p class="footer-credits">© 2025 - (LABRIOT) Laboratório de Robótica e IoT da Universidade Tecnológica Federal do Paraná, Campus Ponta Grossa</p>
    </footer>
    <div class="footer-extra">
      <p>Informações adicionais: Este site é parte de um projeto acadêmico.</p>
    </div>
  </div>
</template>


<script>
import AppNavbar from './components/AppNavbar.vue';
import './assets/css/styles.css';
export default {
  name: 'App',
  components: {
    AppNavbar,
  },
};
</script>
