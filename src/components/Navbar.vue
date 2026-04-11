<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled, 'menu-open': isMenuOpen }">
    <div class="container">
      <a class="navbar-brand" href="#">NJ</a>
      
      <button class="mobile-toggle" @click="toggleMenu" aria-label="Toggle navigation">
        <span class="hamburger" :class="{ 'is-active': isMenuOpen }"></span>
      </button>

      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <a href="#about" @click="closeMenu">About</a>
        <a href="#projects" @click="closeMenu">Projects</a>
        <a href="#articles" @click="closeMenu">Articles</a>
        <a href="#experience" @click="closeMenu">Experience</a>
        <a href="#education" @click="closeMenu">Education</a>
        <a href="#contact" @click="closeMenu">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
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
  z-index: 1001; /* Ensure brand is above mobile menu background */
  position: relative;
}

.mobile-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001; /* Ensure toggle is above mobile menu background */
  position: relative;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--text-color);
  position: relative;
  transition: background-color 0.3s;
}

.hamburger::before, .hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: var(--text-color);
  transition: transform 0.3s, top 0.3s;
  left: 0;
}

.hamburger::before { top: -6px; }
.hamburger::after { top: 6px; }

.hamburger.is-active { background-color: transparent; }
.hamburger.is-active::before { transform: rotate(45deg); top: 0; }
.hamburger.is-active::after { transform: rotate(-45deg); top: 0; }

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--bg-color);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    transform: translateY(-100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    pointer-events: none;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-links a {
    font-size: 1.5rem;
    font-weight: 800;
  }
}
</style>
