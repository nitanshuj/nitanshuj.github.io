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
          <li class="nav-item d-flex align-items-center ms-lg-3">
            <label class="theme-switch" for="checkbox">
              <input type="checkbox" id="checkbox" @change="toggleTheme" :checked="isDark" />
              <div class="slider round">
                <i class="fas fa-sun toggle-icon-sun"></i>
                <i class="fas fa-moon toggle-icon-moon"></i>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isDark = ref(localStorage.getItem('theme') === 'dark')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleTheme = (e) => {
  const dark = e.target.checked
  isDark.value = dark
  document.body.classList.toggle('dark-mode', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  if (isDark.value) {
    document.body.classList.add('dark-mode')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
