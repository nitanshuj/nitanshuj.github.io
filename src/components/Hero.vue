<template>
  <section class="hero-section">
    <div class="container">
      <div class="grid-layout">
        <div class="hero-content" data-aos="fade-up" data-aos-duration="500">
          <h1 class="display-1">Nitanshu<br>Joshi</h1>
          <p class="hero-subtitle">
            Data Scientist & AI Engineer. <br>
            Transforming business problems into AI-based applications.
          </p>
          <div class="hero-cta mt-4">
            <a href="#projects" class="nav-link">View Projects &rarr;</a>
          </div>
          <div class="hero-cta mt-2">
            <a href="#articles" class="nav-link">View Articles &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // AOS is already initialized in main.js
})
</script>

<style scoped>
.hero-content {
  grid-column: 1 / span 8;
}

.display-1 {
  line-height: 0.9;
  text-transform: uppercase;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  max-width: 600px;
  line-height: 1.4;
}

.hero-cta {
  font-size: 1.1rem;
}

.hero-cta a {
  text-decoration: none;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--text-color);
  letter-spacing: 0.05em;
  padding: 10px 0;
  border-bottom: 2px solid var(--text-color);
  transition: opacity 0.3s;
}

.hero-cta a:hover {
  opacity: 0.6;
}

@media (max-width: 768px) {
  .hero-content {
    grid-column: 1 / span 12;
  }
}
</style>
