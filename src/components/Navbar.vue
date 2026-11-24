<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled, 'menu-open': isMenuOpen }">
    <div class="container">
      <a class="navbar-brand" href="#">NJ</a>
      
      <div class="nav-right">
        <div class="nav-links" :class="{ 'active': isMenuOpen }">
          <a href="#about" @click="closeMenu">About</a>
          <a href="#projects" @click="closeMenu">Selected Work</a>
          <a href="#products" @click="closeMenu">Products</a>
          <a href="#articles" @click="closeMenu">Articles</a>
          <a href="#experience" @click="closeMenu">Experience</a>
          <a href="#education" @click="closeMenu">Education</a>
          <a href="#contact" @click="closeMenu">Contact</a>
          <a href="/resume.html" target="_blank" class="mobile-cv-link" @click="closeMenu">Resume (CV) &rarr;</a>
        </div>

        <div class="nav-actions">
          <a href="/resume.html" target="_blank" class="nav-cv-btn">Resume</a>
          
          <button class="theme-btn" @click="toggleTheme" :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'">
            <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>

          <button class="mobile-toggle" @click="toggleMenu" aria-label="Toggle navigation">
            <span class="hamburger" :class="{ 'is-active': isMenuOpen }"></span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isDark = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  const newTheme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', newTheme)
  document.documentElement.setAttribute('data-bs-theme', newTheme)
  try {
    localStorage.setItem('theme', newTheme)
  } catch (e) {}
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  const current = document.documentElement.getAttribute('data-theme')
  isDark.value = current === 'dark'
  document.documentElement.setAttribute('data-bs-theme', isDark.value ? 'dark' : 'light')
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-right {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 1001;
}

.navbar-brand {
  font-weight: 800;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--text-color);
  letter-spacing: -0.05em;
  z-index: 1001;
  position: relative;
}

.theme-btn {
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-color);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.9rem;
}

.theme-btn:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

.nav-cv-btn {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-color);
  text-decoration: none;
  padding: 6px 14px;
  border: 1px solid var(--border-color);
  letter-spacing: 0.05em;
  transition: var(--transition);
}

.nav-cv-btn:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

.mobile-cv-link {
  display: none;
}

.mobile-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
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

@media (max-width: 900px) {
  .nav-cv-btn {
    display: none;
  }
  .mobile-cv-link {
    display: inline-block;
    color: var(--accent-color) !important;
    font-family: var(--font-mono);
  }
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
