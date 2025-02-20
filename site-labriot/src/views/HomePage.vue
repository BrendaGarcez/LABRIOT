<template>
  <div class="home-page">
    <header class="hero-section">
      <h1>Bem-vindo ao Laboratório de Robótica e IoT</h1>
      <p>Explorando a tecnologia para transformar o mundo!</p>
    </header>

    <section class="destaques-section">
      <h2>Nossos Destaques</h2>
      <div class="destaques">
        <div class="destaque-item">
          <img src="@/assets/robotica.jpg" alt="Robótica">
          <h3>Robótica</h3>
          <p>Desenvolvimento de robôs autônomos e sistemas inteligentes.</p>
        </div>
        <div class="destaque-item">
          <img src="@/assets/iot.jpg" alt="Internet das Coisas">
          <h3>IoT (Internet das Coisas)</h3>
          <p>Criação de dispositivos conectados para facilitar o dia a dia.</p>
        </div>
        <div class="destaque-item">
          <img src="@/assets/projetos.jpg" alt="Projetos">
          <h3>Projetos de Extensão</h3>
          <p>Trabalhos práticos com impacto na comunidade.</p>
        </div>
      </div>
    </section>

    <section class="about-us">
      <h2>Quem Somos</h2>
      <p>Somos um grupo de apaixonados por tecnologia, dedicados à pesquisa e ao desenvolvimento de soluções inovadoras nas áreas de Robótica e IoT.</p>
      <p>Nossa missão é inspirar e capacitar futuros engenheiros e cientistas através de projetos práticos e aprendizado colaborativo.</p>
    </section>

    <section class="galeria-section">
      <h2>Nossos Projetos</h2>
      <div class="galeria">
        <img src="@/assets/evento1.jpg" alt="Evento de Robótica">
        <img src="@/assets/prototipo1.jpg" alt="Protótipo de robô">
        <img src="@/assets/projeto-iot.jpg" alt="Projeto IoT">
        <img src="@/assets/grupo.jpg" alt="Equipe do Laboratório">
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
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-page {
  font-family: Arial, sans-serif;
  color: #333;
}

.hero-section {
  text-align: center;
  padding: 50px 20px;
  background-color: #f0f0f0;
}

.hero-section h1 {
  font-size: 2.5rem;
  color: #222;
}

.hero-section p {
  font-size: 1.2rem;
  color: #555;
}

.destaques-section {
  padding: 40px 20px;
  background-color: #fff;
}

.destaques {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.destaque-item {
  text-align: center;
  width: 30%;
  margin: 20px 0;
}

.destaque-item img {
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
}

.destaque-item h3 {
  font-size: 1.5rem;
  color: #444;
  margin: 10px 0;
}

.destaque-item p {
  font-size: 1rem;
  color: #666;
}

.about-us {
  text-align: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.about-us h2 {
  font-size: 2rem;
  color: #333;
}

.about-us p {
  font-size: 1.1rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
}

.galeria-section {
  padding: 40px 20px;
  background-color: #fff;
}

.galeria {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.galeria img {
  width: 23%;
  margin: 10px 0;
  border-radius: 10px;
}

.call-to-action {
  text-align: center;
  padding: 40px 20px;
  background-color: #e0e0e0;
}

.call-to-action h2 {
  font-size: 2rem;
  color: #222;
}

.call-to-action p {
  font-size: 1.2rem;
  color: #555;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
}

.btn:hover {
  background-color: #0056b3;
}
</style>