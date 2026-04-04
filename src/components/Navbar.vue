<template>
  <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <a class="navbar-brand" href="#">Nitanshu Joshi</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#tech-stack">Tech Stack</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#articles">Articles</a></li>
          <li class="nav-item"><a class="nav-link" href="#experience">Experience</a></li>
          <li class="nav-item"><a class="nav-link" href="#education">Education</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          <li class="nav-item ms-lg-4 d-flex flex-column align-items-center justify-content-center mt-3 mt-lg-0">
            <span style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-color); opacity: 0.8; margin-bottom: 4px;">Theme Settings</span>
            <div class="theme-slider-container">
               <input type="range" class="theme-slider" min="0" max="2" :value="themeIndex" @input="updateThemeFromSlider" />
               <div class="slider-labels">
                  <span :class="{'active': themeIndex === 0}" @click="setTheme(THEMES.GRAPHITE_TEAL)" title="Light Theme">Light</span>
                  <span :class="{'active': themeIndex === 1}" @click="setTheme(THEMES.SLATE_CYAN)" title="Dark Theme">Dark</span>
                  <span :class="{'active': themeIndex === 2}" @click="setTheme(THEMES.CVD_SAFE)" class="cvd-label" title="Color Blind Friendly Theme">CVD Safe</span>
               </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTheme } from '../composables/useTheme.js'

const isScrolled = ref(false)

const { currentTheme, THEMES, setTheme } = useTheme()

const themeOrder = [THEMES.GRAPHITE_TEAL, THEMES.SLATE_CYAN, THEMES.CVD_SAFE]
const themeIndex = computed(() => themeOrder.indexOf(currentTheme.value))



const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const updateThemeFromSlider = (e) => {
  setTheme(themeOrder[Number(e.target.value)])
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.theme-slider-container {
  background: var(--card-bg);
  padding: 8px 15px 4px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
}

.theme-slider {
  -webkit-appearance: none;
  width: 60px;
  height: 6px;
  background: var(--section-bg);
  border-radius: 5px;
  outline: none;
  border: 1px solid var(--border-color);
}

.theme-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary-color);
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.theme-slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary-color);
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  border: none;
}

.theme-slider {
  margin-bottom: 6px;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--text-color);
  opacity: 0.7;
}

.slider-labels span {
  cursor: pointer;
  transition: 0.2s;
  padding: 2px 4px;
}

.slider-labels span:hover {
  color: var(--primary-color);
  opacity: 1;
}

.slider-labels span.active {
  color: var(--primary-color);
  opacity: 1;
}

.slider-labels .cvd-label {
  color: #2563EB; 
  opacity: 0.9;
}

.slider-labels .cvd-label.active {
  font-weight: 800;
  color: #1D4ED8;
}
</style>
