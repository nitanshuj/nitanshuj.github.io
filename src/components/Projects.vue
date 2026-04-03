<template>
  <section id="projects" class="py-5">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">My Projects</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">A collection of my work in Data Science, ML, and AI.</p>

      <div class="category-filter mb-5" data-aos="fade-up" data-aos-delay="200">
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

      <div class="row project-grid">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.id" 
          class="col-md-6 col-lg-4 mb-4" 
          data-aos="fade-up" 
          :data-aos-delay="300 + (index % 3) * 100"
        >
          <div class="card h-100 project-card">
            <div class="project-img-container">
              <img :src="project.image" class="card-img-top" :alt="project.title">
              <div class="project-overlay">
                <a :href="project.github" target="_blank" class="btn btn-primary">View Project</a>
              </div>
            </div>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title font-weight-bold text-center">
                <a :href="project.github" target="_blank" class="text-decoration-none">{{ project.title }}</a>
              </h5>
              <div class="d-flex flex-wrap justify-content-center mb-3">
                <span v-for="badge in project.badges" :key="badge" class="badge skill-badge m-1">{{ badge }}</span>
              </div>
              <p class="card-text text-muted">{{ project.description }}</p>
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
  { id: 'data-scientist-ml', label: 'Data Science & ML' },
  { id: 'data-engineering', label: 'Data Engineering' },
  { id: 'data-analysis', label: 'Data Analysis' },
  { id: 'business-analysis', label: 'Business Analysis' }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects
  return projects.filter(p => p.categories.includes(activeCategory.value))
})
</script>

<style scoped>
.project-card {
  border-radius: 20px;
  overflow: hidden;
  transition: var(--transition);
}
.project-img-container {
  height: 220px;
  overflow: hidden;
  position: relative;
}
.project-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s;
}
.project-card:hover .project-overlay {
  opacity: 1;
}
.skill-badge {
  background: var(--section-bg);
  color: var(--primary-color);
  font-weight: 600;
  border: 1px solid var(--border-color);
}
</style>
