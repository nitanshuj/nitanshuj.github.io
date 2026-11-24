<template>
  <section id="articles">
    <div class="container">
      <div class="section-header mb-4" data-aos="fade-up">
        <h2 class="section-title mb-2">Published Articles</h2>
        <p class="section-subtitle muted">
          Technical deep dives on MLOps pipelines, RAG architectures, multi-agent systems, and LLM engineering.
        </p>
      </div>

      <div class="article-list">
        <article 
          v-for="(article, index) in paginatedArticles" 
          :key="article.title" 
          class="article-row"
          data-aos="fade-up"
          :data-aos-delay="index * 60"
        >
          <div class="article-thumb-wrapper">
            <img :src="article.image" :alt="article.title" class="article-thumb" loading="lazy" />
          </div>
          <div class="article-content">
            <span class="card-tag">Article</span>
            <h3>{{ article.title }}</h3>
            <p class="muted">{{ article.description }}</p>
            <div class="article-actions">
              <a
                :href="article.link"
                :target="article.link !== '#' ? '_blank' : undefined"
                :rel="article.link !== '#' ? 'noopener noreferrer' : undefined"
                class="text-link"
              >
                Read Full Post &rarr;
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- Pagination Controls -->
      <div v-if="totalPages > 1" class="pagination-controls mt-5" data-aos="fade-up">
        <button 
          class="pagination-btn" 
          :disabled="currentPage === 1" 
          @click="goToPage(currentPage - 1)"
          aria-label="Previous page"
        >
          &larr; Prev
        </button>
        <div class="page-indicators">
          <button 
            v-for="page in totalPages" 
            :key="page"
            class="page-number-btn"
            :class="{ active: currentPage === page }"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
        </div>
        <button 
          class="pagination-btn" 
          :disabled="currentPage === totalPages" 
          @click="goToPage(currentPage + 1)"
          aria-label="Next page"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { articles as articlesList } from '../data.js'

const currentPage = ref(1)
const itemsPerPage = 4

const totalPages = computed(() => Math.ceil(articlesList.length / itemsPerPage))

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return articlesList.slice(start, start + itemsPerPage)
})

const goToPage = (page) => {
  currentPage.value = page
}
</script>

<style scoped>
section {
  padding: 80px 0;
}

.section-subtitle {
  font-size: 1.05rem;
  max-width: 650px;
  line-height: 1.5;
}

/* Compact Horizontal Media List for Articles */
.article-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.article-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  padding: 16px 24px 16px 16px;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background-color: var(--card-bg) !important;
  transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
}

.article-row:hover {
  transform: translateY(-2px);
  border-color: var(--accent-color);
  box-shadow: 0 10px 24px -10px rgba(0, 0, 0, 0.08);
}

[data-theme="dark"] .article-row:hover {
  box-shadow: 0 10px 24px -10px rgba(0, 0, 0, 0.5);
}

.article-thumb-wrapper {
  width: 180px;
  height: 118px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);
}

.article-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease, filter 0.4s ease;
  filter: grayscale(25%);
}

.article-row:hover .article-thumb {
  transform: scale(1.04);
  filter: grayscale(0%);
}

.article-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  color: var(--text-color) !important;
}

.article-content .card-tag {
  margin-bottom: 6px;
}

.article-content h3 {
  color: var(--text-color) !important;
  font-size: 1.18rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 6px;
}

.article-content p.muted {
  font-size: 0.92rem;
  line-height: 1.5;
  margin-bottom: 12px;
}

.article-actions {
  display: flex;
  align-items: center;
}

.text-link {
  text-decoration: none;
  font-weight: 800;
  font-size: 0.82rem;
  color: var(--text-color) !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 2px;
  display: inline-block;
  transition: var(--transition);
}

.text-link:hover {
  color: var(--accent-color) !important;
  border-bottom-color: var(--accent-color);
  opacity: 1;
}

@media (max-width: 768px) {
  .article-row {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    padding: 16px;
  }
  .article-thumb-wrapper {
    width: 100%;
    height: 170px;
  }
}
</style>
