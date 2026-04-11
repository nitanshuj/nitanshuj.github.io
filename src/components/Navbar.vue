<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <a class="navbar-brand" href="#">NJ</a>
      
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Work</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar-brand {
  font-weight: 800;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--text-color);
  letter-spacing: -0.05em;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 16px;
  }
  .nav-links a {
    font-size: 0.75rem;
  }
}
</style>
