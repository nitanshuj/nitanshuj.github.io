<template>
  <section id="experience">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Career</h2>
      <div class="experience-list">
        <div 
          v-for="(job, index) in experience" 
          :key="index" 
          class="experience-item grid-layout"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="item-meta">
            <span class="muted">{{ job.period }}</span>
            <h3 class="mt-4">{{ job.company }}</h3>
            <p class="role">{{ job.title }}</p>
          </div>
          <div class="item-details">
            <ul class="achievements">
              <li v-for="ach in job.achievements" :key="ach">{{ ach }}</li>
            </ul>
            <div class="tech-row mt-4">
              <span v-for="tag in job.tags" :key="tag" class="tag-mini">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experience } from '../data.js'
</script>

<style scoped>
.experience-item {
  padding: 60px 0;
  border-bottom: 1px solid var(--border-color);
}

.experience-item:last-child {
  border-bottom: none;
}

.item-meta {
  grid-column: span 4;
}

.item-details {
  grid-column: span 8;
}

.role {
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 8px;
}

.achievements {
  list-style: none;
  padding: 0;
}

.achievements li {
  margin-bottom: 16px;
  position: relative;
  padding-left: 24px;
  color: var(--text-muted);
}

.achievements li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--text-color);
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
    grid-column: 1 / -1;
  }
  .item-details {
    margin-top: 24px;
  }
}
</style>
