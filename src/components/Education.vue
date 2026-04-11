<template>
  <section id="education">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Academia</h2>
      <div class="education-list">
        <div 
          v-for="(edu, index) in education" 
          :key="index" 
          class="education-item grid-layout"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="item-meta">
            <span class="muted">{{ edu.period }}</span>
            <h3 class="mt-4">{{ edu.institution }}</h3>
            <p class="degree">{{ edu.degree }}</p>
          </div>
          <div class="item-details">
            <p class="description mb-4">{{ edu.description }}</p>
            <div class="coursework">
              <span v-for="course in edu.coursework" :key="course" class="tag-mini">{{ course }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { education } from '../data.js'
</script>

<style scoped>
.education-item {
  padding: 60px 0;
  border-bottom: 1px solid var(--border-color);
}

.education-item:last-child {
  border-bottom: none;
}

.item-meta {
  grid-column: span 4;
}

.item-details {
  grid-column: span 8;
}

.degree {
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 8px;
}

.description {
  color: var(--text-muted);
  line-height: 1.6;
}

.tag-mini {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-color);
  background-color: var(--border-color);
  padding: 4px 10px;
  margin-right: 8px;
  margin-bottom: 8px;
  display: inline-block;
}

@media (max-width: 768px) {
  .item-meta, .item-details {
    grid-column: span 12;
  }
  .item-details {
    margin-top: 24px;
  }
}
</style>
