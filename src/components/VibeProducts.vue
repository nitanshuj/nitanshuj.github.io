<template>
  <section id="products" class="vibe-products-section">
    <div class="container">
      <div class="section-header mb-5" data-aos="fade-up">
        <div class="section-badge mb-3">
          <span class="lightning-icon">⚡</span>
          <span>Agentic Engineering</span>
        </div>
        <h2 class="section-title mb-2">My End-to-end Products (Vibe Coded)</h2>
        <p class="section-subtitle muted">
          Full-stack applications conceived, engineered, and shipped with AI coding agents at 10x velocity.
        </p>
      </div>

      <div class="card-grid">
        <article 
          v-for="(product, index) in paginatedProducts" 
          :key="product.id" 
          class="minimal-card vibe-card"
          data-aos="fade-up" 
          :data-aos-delay="index * 100"
        >
          <div class="card-image-wrapper">
            <img :src="product.image" :alt="product.title" class="card-image" loading="lazy" />
          </div>
          <div class="card-body">
            <div class="card-header-tags mb-3">
              <span class="card-tag">Agentic Product</span>
              <span v-if="product.velocity" class="badge-velocity">{{ product.velocity }}</span>
            </div>

            <h3 class="mb-3">{{ product.title }}</h3>
            <p class="muted mb-4">{{ product.description }}</p>

            <div class="card-footer mt-auto">
              <div class="badge-row mb-4">
                <span v-for="badge in product.badges" :key="badge" class="badge-mini">{{ badge }}</span>
              </div>
              <div class="card-action-row">
                <a v-if="product.liveDemo" :href="product.liveDemo" target="_blank" rel="noopener noreferrer" class="btn-demo">
                  <i class="fas fa-arrow-up-right-from-square"></i> Live App
                </a>
                <a v-if="product.github" :href="product.github" target="_blank" rel="noopener noreferrer" class="text-link">GitHub Code &rarr;</a>
              </div>
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
import { vibeProducts } from '../data.js'

const currentPage = ref(1)
const itemsPerPage = 4

const totalPages = computed(() => Math.ceil(vibeProducts.length / itemsPerPage))

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return vibeProducts.slice(start, start + itemsPerPage)
})

const goToPage = (page) => {
  currentPage.value = page
}
</script>

<style scoped>
section {
  padding: 80px 0;
}

.vibe-products-section {
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--border-color);
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent-color);
  padding: 4px 12px;
  border: 1px solid var(--accent-color);
  background-color: rgba(217, 119, 6, 0.08);
}

[data-theme="dark"] .section-badge {
  background-color: rgba(245, 158, 11, 0.12);
}

.lightning-icon {
  font-size: 0.9rem;
}

.section-subtitle {
  font-size: 1.15rem;
  max-width: 650px;
  line-height: 1.5;
}

/* 2x2 Separated Grid for Vibe Products */
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  background-color: transparent;
  border: none;
}

.minimal-card {
  padding: 0;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--card-bg);
  transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
}

.minimal-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-color);
  box-shadow: 0 12px 28px -10px rgba(0, 0, 0, 0.08);
}

[data-theme="dark"] .minimal-card:hover {
  box-shadow: 0 12px 28px -10px rgba(0, 0, 0, 0.5);
}

.card-image-wrapper {
  width: 100%;
  height: 190px;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--card-bg);
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
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--card-bg) !important;
  color: var(--text-color) !important;
  border: none;
}

.card-body h3 {
  color: var(--text-color) !important;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.card-body p.muted {
  font-size: 0.92rem;
  line-height: 1.5;
  margin-bottom: 16px;
}

.card-header-tags {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.badge-mini {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-color);
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 3px 8px;
}

.card-action-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.text-link {
  text-decoration: none;
  font-weight: 800;
  font-size: 0.85rem;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 2px;
  display: inline-block;
  transition: var(--transition);
}

.text-link:hover {
  color: var(--accent-color);
  border-bottom-color: var(--accent-color);
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
