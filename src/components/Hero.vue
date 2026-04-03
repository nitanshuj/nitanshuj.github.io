<template>
  <section class="hero-section">
    <div class="hero-bg-accent"></div>
    <div class="hero-bg-accent-2"></div>
    <div class="container text-center">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1 class="display-3 mb-4">Nitanshu <span class="highlight">Joshi</span></h1>
        <h3 class="mb-4">
          <span ref="typeTarget"></span>
        </h3>
        <p class="lead mb-5">Transforming business problems into AI-based applications</p>
        <div class="hero-buttons">
          <a href="#projects" class="btn btn-primary btn-lg">View My Work</a>
          <a href="#contact" class="btn btn-outline-custom btn-lg">Contact Me</a>
        </div>
      </div>
      <div class="scroll-down">
        <a href="#about"><i class="fas fa-chevron-down"></i></a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'

const typeTarget = ref(null)

onMounted(() => {
  new Typed(typeTarget.value, {
    strings: ['Data Scientist', 'Machine Learning Engineer', 'AI Engineer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
  })
})
</script>
