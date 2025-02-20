<template>
  <div>
    <h1>Bem-vindo ao Laboratório de Robótica e IoT</h1>
    <p>Explorando a tecnologia para transformar o mundo!</p>
    <section>
      <h2>Nossos Destaques</h2>
      <div class="destaques">
        <div class="destaque-item">
          <img src="robotica.jpg" alt="Robótica">
          <h3>Robótica</h3>
          <p>Desenvolvimento de robôs autônomos e sistemas inteligentes.</p>
        </div>
        <div class="destaque-item">
          <img src="iot.jpg" alt="Internet das Coisas">
          <h3>IoT (Internet das Coisas)</h3>
          <p>Criação de dispositivos conectados para facilitar o dia a dia.</p>
        </div>
        <div class="destaque-item">
          <img src="projetos.jpg" alt="Projetos">
          <h3>Projetos de Extensão</h3>
          <p>Trabalhos práticos com impacto na comunidade.</p>
        </div>
      </div>
    </section>
    <section>
      <h2>Quem Somos</h2>
      <p>Somos um grupo de apaixonados por tecnologia, dedicados à pesquisa e ao desenvolvimento de soluções inovadoras nas áreas de Robótica e IoT.</p>
      <p>Nossa missão é inspirar e capacitar futuros engenheiros e cientistas através de projetos práticos e aprendizado colaborativo.</p>
    </section>
    <section>
      <h2>Galeria de Imagens</h2>
      <div class="galeria">
        <img src="evento1.jpg" alt="Evento de Robótica">
        <img src="prototipo1.jpg" alt="Protótipo de robô">
        <img src="projeto-iot.jpg" alt="Projeto IoT">
        <img src="grupo.jpg" alt="Equipe do Laboratório">
      </div>
    </section>

    <section class="call-to-action">
      <h2>Junte-se a Nós!</h2>
      <p>Faça parte de nossa equipe e ajude a construir o futuro da tecnologia.</p>
      <a href="/contato" class="btn">Entre em Contato</a>
    </section>


  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  name: "HomePage",
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
