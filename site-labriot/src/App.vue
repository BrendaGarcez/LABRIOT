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
              <p>Email: contato@labriot.com | Telefone: (41) 1234-5678</p>
              <div class="social-media">
                  <a href="#"><img src="facebook-icon.png" alt="Facebook"></a>
                  <a href="#"><img src="instagram-icon.png" alt="Instagram"></a>
                  <a href="#"><img src="twitter-icon.png" alt="Twitter"></a>
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

export default {
  name: 'App',
  components: {
    AppNavbar,
  },
};
</script>
