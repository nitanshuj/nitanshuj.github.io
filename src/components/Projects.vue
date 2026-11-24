<template>
  <section id="projects">
    <div class="container">
      <div class="section-header mb-5" data-aos="fade-up">
        <h2 class="section-title mb-2">Selected Work (From Scratch)</h2>
        <p class="section-subtitle muted">
          Machine learning pipelines, deep learning models, and analytical systems engineered from first principles.
        </p>
      </div>
      
      <div class="category-filter mb-4" data-aos="fade-up">
        <button 
          v-for="cat in allCategories" 
          :key="cat.id" 
          @click="setCategory(cat.id)"
          class="filter-btn"
          :class="{ active: activeCategory === cat.id }"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="card-grid">
        <article 
          v-for="(project, index) in paginatedProjects" 
          :key="project.id" 
          class="minimal-card"
          data-aos="fade-up" 
          :data-aos-delay="index * 80"
        >
          <div class="card-image-wrapper">
            <img :src="project.image" :alt="project.title" class="card-image" loading="lazy" />
          </div>
          <div class="card-body">
            <div class="card-header-tags mb-3">
              <span class="card-tag">{{ project.categories[0].replace(/-/g, ' ') }}</span>
            </div>
            <h3 class="mb-3">{{ project.title }}</h3>
            <p class="muted mb-4">{{ project.description }}</p>
            <div class="card-footer mt-auto">
              <div class="badge-row mb-4">
                <span v-for="badge in project.badges.slice(0, 4)" :key="badge" class="badge-mini">{{ badge }}</span>
              </div>
              <div class="card-action-row">
                <a :href="project.github" target="_blank" class="text-link">{{ projectLinkLabel(project.github) }} &rarr;</a>
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
import { projects } from '../data.js'

const activeCategory = ref('all')
const currentPage = ref(1)
const itemsPerPage = 4

const allCategories = [
  { id: 'all', label: 'All' },
  { id: 'ai-agents', label: 'AI Agents' },
  { id: 'genai-llm', label: 'GenAI & LLM' },
  { id: 'data-scientist-ml', label: 'ML & DS' },
  { id: 'data-engineering', label: 'Data Engineering' },
  { id: 'business-analysis', label: 'Business Analysis' }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects
  return projects.filter(p => p.categories.includes(activeCategory.value))
})

const totalPages = computed(() => Math.ceil(filteredProjects.value.length / itemsPerPage))

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredProjects.value.slice(start, start + itemsPerPage)
})

const setCategory = (catId) => {
  activeCategory.value = catId
  currentPage.value = 1
}

const goToPage = (page) => {
  currentPage.value = page
}

const projectLinkLabel = (url) => {
  if (url && url.includes('github.com')) return 'View GitHub Code'
  return 'View Project'
}
</script>

<style scoped>
section {
  padding: 80px 0;
}

.category-filter {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 20px;
}

.filter-btn {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-color);
  padding: 8px 16px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
  font-family: var(--font-main);
}

.filter-btn:hover, .filter-btn.active {
  background-color: var(--accent-color);
  color: #ffffff;
  border-color: var(--accent-color);
}

[data-theme="dark"] .filter-btn:hover, [data-theme="dark"] .filter-btn.active {
  color: #141412;
}

.card-header-tags {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.card-action-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

/* 2x2 Separated Grid for Projects */
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
  background-color: var(--card-bg);
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
  opacity: 1;
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
