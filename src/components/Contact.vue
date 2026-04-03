<template>
  <section id="contact" class="py-5">
    <div class="container text-center">
      <h2 class="section-title" data-aos="fade-up">Contact</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">Let's connect and collaborate.</p>

      <div class="social-links d-flex justify-content-center gap-4" data-aos="fade-up" data-aos-delay="300">
        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" class="social-link-wrapper">
          <div class="social-icon">
            <img :src="social.icon" :alt="social.name">
          </div>
          <span class="social-label">{{ social.name }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nitanshu-joshi-ds/', icon: '/favicon/LinkedIn_Favicon/apple-touch-icon.png' },
  { name: 'GitHub', url: 'https://github.com/nitanshuj', icon: '/favicon/Github_Favicon/apple-touch-icon.png' },
  { name: 'Medium', url: 'https://medium.com/@nitanshuj138', icon: '/favicon/Medium_Favicon/apple-touch-icon.png' },
  { name: 'Email', url: 'mailto:nitanshuj138@gmail.com', icon: '/favicon/Mail_Favicon/apple-touch-icon.png' }
]
</script>

<style scoped>
.social-link-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: var(--transition);
}
.social-link-wrapper:hover {
  transform: translateY(-10px);
}
.social-icon {
  width: 80px;
  height: 80px;
  background: var(--card-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
  margin-bottom: 10px;
  border: 1px solid var(--border-color);
  transition: 0.3s;
}
.social-link-wrapper:hover .social-icon {
  border-color: var(--primary-color);
  box-shadow: var(--hover-shadow);
}
.social-icon img {
  width: 50%;
  height: 50%;
  object-fit: contain;
}
.social-label {
  font-weight: 600;
  color: var(--text-color);
  font-size: 0.9rem;
}
</style>
