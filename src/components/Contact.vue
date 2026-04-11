<template>
  <section id="contact">
    <div class="container">
      <div class="contact-header" data-aos="fade-up">
        <h2 class="section-title">Get in Touch</h2>
        <p class="display-2 mb-4">
          Let's build something <span class="muted">meaningful together.</span>
        </p>
        <div class="contact-methods mt-4">
          <a href="mailto:nitanshuj138@gmail.com" class="main-contact">nitanshuj138@gmail.com</a>
        </div>
      </div>

      <div class="social-grid" data-aos="fade-up" data-aos-delay="200">
        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" class="social-item">
          <div class="social-icon-wrapper">
            <img :src="social.icon" :alt="social.name" class="social-icon" />
          </div>
          <span class="social-label">{{ social.name }}</span>
          <span class="social-arrow muted">&rarr;</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const socials = [
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/nitanshu-joshi-ds/',
    icon: '/favicon/linkedin.png'
  },
  { 
    name: 'GitHub', 
    url: 'https://github.com/nitanshuj',
    icon: '/favicon/github.png'
  },
  { 
    name: 'Medium', 
    url: 'https://medium.com/@nitanshuj138',
    icon: '/favicon/medium.png'
  },
  { 
    name: 'Email', 
    url: 'mailto:nitanshuj138@gmail.com',
    icon: '/favicon/gmail.png'
  }
]
</script>

<style scoped>
.contact-header {
  margin-bottom: 80px;
}

.main-contact {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--text-color);
  text-decoration: none;
  border-bottom: 3px solid var(--text-color);
  padding-bottom: 4px;
  transition: opacity 0.3s;
  display: inline-block;
}

.main-contact:hover {
  opacity: 0.6;
}

.social-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid var(--border-color);
}

.social-item {
  display: flex;
  align-items: center;
  gap: 24px;
  text-decoration: none;
  padding: 28px 0;
  border-bottom: 1px solid var(--border-color);
  transition: var(--transition);
}

.social-item:hover {
  padding-left: 12px;
}

.social-icon-wrapper {
  width: 48px;
  height: 48px;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: var(--transition);
}

.social-item:hover .social-icon-wrapper {
  border-color: var(--text-color);
  background-color: var(--border-color);
}

.social-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.social-label {
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  flex: 1;
}

.social-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s;
}

.social-item:hover .social-arrow {
  transform: translateX(8px);
  color: var(--text-color);
}

@media (max-width: 768px) {
  .main-contact {
    font-size: 1.2rem;
  }
  .social-item {
    gap: 16px;
    padding: 20px 0;
  }
}
</style>
