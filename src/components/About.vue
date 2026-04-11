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
        <div class="about-image" data-aos="fade-up" data-aos-delay="200">
          <div class="image-wrapper">
            <img src="/portraits/Nitanshu_Joshi_5.jpg" alt="Nitanshu Joshi">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-text {
  grid-column: span 8;
}

.about-image {
  grid-column: span 4;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}

.image-wrapper {
  width: 100%;
  max-width: 300px;
  filter: grayscale(100%);
  transition: var(--transition);
  border: 1px solid var(--border-color);
  padding: 10px;
}

.image-wrapper:hover {
  filter: grayscale(0%);
}

.image-wrapper img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

.about-description {
  max-width: 600px;
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-text, .about-image {
    grid-column: span 12;
  }
  .about-image {
    order: -1;
    justify-content: flex-start;
    margin-bottom: 40px;
  }
  .display-2 {
    font-size: 2rem;
  }
}
</style>
