<template>
  <section id="articles" class="py-5">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Articles</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Insights and knowledge sharing.</p>

      <div class="row">
        <div v-for="(article, index) in articlesList" :key="index" class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" :data-aos-delay="200 + index * 100">
          <div class="article-card h-100">
            <div class="article-img">
              <img :src="article.image" :alt="article.title">
            </div>
            <div class="article-content text-center">
              <h4>{{ article.title }}</h4>
              <p class="text-muted">{{ article.description }}</p>
              <a :href="article.link" target="_blank" class="read-more">
                Read Article <i class="fas fa-arrow-right"></i>
              </a>
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
.article-card {
  border-radius: 20px;
  background: var(--card-bg);
  box-shadow: var(--shadow);
  transition: var(--transition);
  overflow: hidden;
}
.article-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
}
.article-img {
  height: 200px;
  overflow: hidden;
}
.article-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
}
.article-card:hover .article-img img {
  transform: scale(1.1);
}
.article-content {
  padding: 25px;
}
.article-content h4 {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 10px;
}
.read-more {
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}
.read-more:hover {
  color: var(--secondary-color);
  padding-left: 5px;
}
</style>
