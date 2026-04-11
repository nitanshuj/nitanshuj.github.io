<template>
  <section id="projects">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Selected Work</h2>
      
      <div class="category-filter mb-4" data-aos="fade-up">
        <button 
          v-for="cat in allCategories" 
          :key="cat.id" 
          @click="activeCategory = cat.id"
          class="filter-btn"
          :class="{ active: activeCategory === cat.id }"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="card-grid">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.id" 
          class="minimal-card"
          data-aos="fade-up" 
          :data-aos-delay="index * 80"
        >
          <div class="card-image-wrapper">
            <img :src="project.image" :alt="project.title" class="card-image" loading="lazy" />
          </div>
          <div class="card-body">
            <span class="card-tag">{{ project.categories[0].replace(/-/g, ' ') }}</span>
            <h3 class="mb-4">{{ project.title }}</h3>
            <p class="muted mb-4">{{ project.description }}</p>
            <div class="card-footer mt-4">
              <div class="badge-row mb-4">
                <span v-for="badge in project.badges.slice(0, 3)" :key="badge" class="badge-mini">{{ badge }}</span>
              </div>
              <a :href="project.github" target="_blank" class="text-link">{{ projectLinkLabel(project.github) }} &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data.js'

const activeCategory = ref('all')

const allCategories = [
  { id: 'all', label: 'All' },
  { id: 'ai-agents', label: 'AI Agents' },
  { id: 'genai-llm', label: 'GenAI & LLM' },
  { id: 'data-scientist-ml', label: 'ML' },
  { id: 'data-engineering', label: 'Engineering' }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects
  return projects.filter(p => p.categories.includes(activeCategory.value))
})

const projectLinkLabel = (url) => {
  if (url && url.includes('github.com')) return 'View GitHub Code'
  return 'View Project'
}
</script>

<style scoped>
.category-filter {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 20px;
}

.filter-btn {
  background: none;
  border: 1px solid var(--border-color);
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
  background-color: var(--text-color);
  color: var(--bg-color);
}

/* Override card-grid from global to be 3-col for projects */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
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
  height: 200px;
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

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.badge-mini {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--text-muted);
  border: 1px solid var(--border-color);
  padding: 2px 8px;
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
