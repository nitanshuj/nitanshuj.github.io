<template>
  <section id="education" class="py-5">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Education</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Academic journey that shaped my expertise.</p>

      <div class="timeline-section">
        <div class="timeline-container">
          <div class="timeline-line-base"></div>
          <div class="timeline-line-fill" :style="{ height: scrollProgress + '%' }"></div>

          <div 
            v-for="(edu, index) in educationList" 
            :key="index" 
            class="timeline-item" 
            :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'"
            data-aos="fade-up"
            :data-aos-delay="200 + index * 100"
          >
            <div class="timeline-icon-wrapper">
              <div class="timeline-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
            </div>
            <div class="timeline-content-wrapper">
              <div class="timeline-content">
                <div class="item-title">{{ edu.degree }}</div>
                <div class="item-subtitle">{{ edu.institution }}</div>
                <div class="item-period">{{ edu.period }} | {{ edu.location }}</div>
                <div class="item-description">
                  {{ edu.description }}
                </div>

                <div class="coursework mt-3">
                  <strong>Key Coursework:</strong><br>
                  <span v-for="course in edu.coursework" :key="course" class="item-tag">{{ course }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { education as educationList } from '../data.js'

const scrollProgress = ref(0)

const updateProgress = () => {
  const section = document.getElementById('education')
  if (!section) return
  
  const rect = section.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const startPoint = rect.top - (viewportHeight * 0.5)
  const totalHeight = rect.height
  
  let progress = -startPoint / totalHeight
  progress = Math.max(0, Math.min(1, progress))
  scrollProgress.value = progress * 100
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress)
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<style scoped>
.coursework strong {
  display: block;
  margin-bottom: 10px;
}
.item-tag {
  background: var(--primary-gradient);
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  margin: 3px;
  display: inline-block;
}
</style>
