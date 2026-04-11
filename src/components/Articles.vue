<template>
  <section id="articles">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Published Articles</h2>
      <div class="card-grid">
        <div 
          v-for="(article, index) in articlesList" 
          :key="index" 
          class="minimal-card"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
        >
          <div class="card-image-wrapper">
            <img :src="article.image" :alt="article.title" class="card-image" loading="lazy" />
          </div>
          <div class="card-body">
            <span class="card-tag">Article</span>
            <h3 class="mb-4">{{ article.title }}</h3>
            <p class="muted mb-4">{{ article.description }}</p>
            <div class="card-footer mt-4">
              <a :href="article.link" target="_blank" class="text-link">Read Full Post &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { articles as articlesList } from '../data.js'
</script>

<style scoped>
/* Override card-grid to have narrower columns */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1px;
  border: 1px solid var(--border-color);
}

.minimal-card {
  padding: 0;
  border: none;
  border-radius: 0;
  display: flex;
  flex-direction: column;
}

.minimal-card:hover {
  background-color: transparent;
}

.card-image-wrapper {
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: grayscale(40%);
}

.minimal-card:hover .card-image {
  transform: scale(1.04);
  filter: grayscale(0%);
}

.card-body {
  padding: 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.text-link {
  text-decoration: none;
  font-weight: 800;
  font-size: 0.85rem;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--text-color);
  padding-bottom: 2px;
  display: inline-block;
  transition: opacity 0.3s;
}

.text-link:hover {
  opacity: 0.5;
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
