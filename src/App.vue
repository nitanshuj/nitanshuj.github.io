<template>
  <div class="app-container">
    <Navbar />
    <Hero />
    <main>
      <About />
      <TechStack />
      <Projects />
      <Articles />
      <Experience />
      <Education />
      <Contact />
    </main>
    <Footer />
    
    <!-- Back to Top -->
    <button 
      class="back-to-top" 
      :class="{ active: showBackToTop }" 
      @click="scrollToTop"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import TechStack from './components/TechStack.vue'
import Projects from './components/Projects.vue'
import Articles from './components/Articles.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background: var(--text-color);
  color: var(--bg-color);
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  z-index: 1000;
  cursor: pointer;
}

.back-to-top:hover {
  opacity: 0.7;
}
</style>
