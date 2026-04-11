<template>
  <section id="about" class="section-padding">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">About Me</h2>
      <div class="row align-items-center">
        <div class="col-md-5 text-center" data-aos="fade-right" data-aos-delay="200">
          <div class="profile-img-container">
            <img src="/portraits/Nitanshu_Joshi_5.jpg" alt="Nitanshu Joshi Profile" class="big-square-img">
          </div>
        </div>
        <div class="col-md-7" data-aos="fade-left" data-aos-delay="300">
          <p class="lead text-justify mb-4">
            <span class="highlight-text">Results-driven</span> Data Scientist with 
            <span class="highlight-text">2 years experience</span> 
            building <span class="highlight-text">scalable ML solutions</span> in industry and academia.
          </p>
          <p class="lead text-justify mb-4">
            Deployed <span class="highlight-text">recommendation systems</span> and 
            <span class="highlight-text">predictive models</span> to boost <span class="highlight-text">user growth</span> and <span class="highlight-text">retention</span>.
          </p>
          <p class="lead text-justify mb-4">
            Skilled in <span class="highlight-text">real-time analytics, NLP, AWS, Azure</span>; expert at transforming data into <span class="highlight-text">actionable insights</span>.
          </p>
          <p class="lead text-justify mb-4">
            Proficient in <span class="highlight-text">Python, SQL, Power BI, Tableau</span> and advanced statistics, with a passion for <span class="highlight-text">continuous learning</span>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlight-text {
  color: var(--primary-color);
  font-weight: 600;
}
.profile-img-container {
  position: relative;
  display: inline-block;
  padding: 10px;
  background: var(--primary-gradient);
  border-radius: 30px;
  box-shadow: var(--shadow);
}
.big-square-img {
  width: 100%;
  max-width: 350px;
  border-radius: 20px;
  display: block;
}
</style>
