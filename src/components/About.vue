<template>
  <section id="about">
    <div class="container">
      <div class="grid-layout">
        <div class="about-text" data-aos="fade-up">
          <h2 class="section-title">Background</h2>
          <p class="display-2 mb-4">
            Building scalable ML solutions <span class="muted">at the intersection of industry and research.</span>
          </p>
          <div class="about-description">
            <p class="muted mb-4">
              Results-driven Data Scientist with 2 years of experience building scalable ML solutions. 
              I specialize in deploying recommendation systems and predictive models that boost user growth and retention.
            </p>
            <p class="muted">
              Expert in real-time analytics, NLP, and cloud infrastructure (AWS/Azure). 
              My passion lies in transforming raw data into actionable business intelligence through Python, SQL, and advanced statistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 90px 0;
}

.about-text {
  grid-column: span 10;
}

.about-description {
  max-width: 740px;
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  section {
    padding: 72px 0;
  }
  .about-text {
    grid-column: span 12;
  }
  .display-2 {
    font-size: 2rem;
  }
}
</style>
