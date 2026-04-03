<template>
  <section id="experience" class="py-5">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Professional Experience</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">A journey of growth and innovation.</p>

      <div class="timeline-section">
        <div class="timeline-container">
          <div class="timeline-line-base"></div>
          <div class="timeline-line-fill" :style="{ height: scrollProgress + '%' }"></div>

          <div 
            v-for="(job, index) in experienceList" 
            :key="index" 
            class="timeline-item" 
            :class="[{ 'animate-in': job.visible }, index % 2 === 0 ? 'timeline-left' : 'timeline-right']"
            v-observe-visibility="{
              callback: (isVisible) => job.visible = isVisible,
              once: true
            }"
            data-aos="fade-up"
            :data-aos-delay="200 + index * 100"
          >
            <div class="timeline-icon-wrapper">
              <div class="timeline-icon">
                <i class="fas fa-briefcase"></i>
              </div>
            </div>
            <div class="timeline-content-wrapper">
              <div class="timeline-content">
                <div class="item-title">{{ job.title }}</div>
                <div class="item-subtitle">{{ job.company }}</div>
                <div class="item-period">{{ job.period }} | {{ job.location }}</div>
                
                <ul v-if="job.achievements.length" class="achievements-list">
                  <li v-for="ach in job.achievements" :key="ach">{{ ach }}</li>
                </ul>

                <div class="tech-stack mt-4">
                  <span v-for="tag in job.tags" :key="tag" class="item-tag">{{ tag }}</span>
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
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import { experience } from '../data.js'

const experienceList = reactive(experience.map(job => ({ ...job, visible: false })))
const scrollProgress = ref(0)
const sectionRef = ref(null)

const updateProgress = () => {
  const section = document.getElementById('experience')
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
/* Scoped styles for timeline items if needed */
.item-tag {
  background: var(--primary-gradient);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin: 5px;
  display: inline-block;
}
</style>
