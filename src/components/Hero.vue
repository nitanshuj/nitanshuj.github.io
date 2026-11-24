<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-split">
        <div class="hero-left" data-aos="fade-up" data-aos-duration="800">
          <div class="status-pill mb-4">
            <span class="status-dot"></span>
            <span>Available for AI Collaborations</span>
          </div>
          
          <h1 class="display-1">Nitanshu<br>Joshi</h1>
          
          <p class="hero-subtitle">
            Data Scientist & AI Systems Engineer. <br>
            Transforming enterprise bottlenecks into cost-optimized, production AI & agentic applications.
          </p>

          <!-- CTAs -->
          <div class="hero-cta-group mt-4">
            <a href="#projects" class="cta-link primary">Selected Work &rarr;</a>
            <a href="#products" class="cta-link primary">Vibe Products &rarr;</a>
            <a href="#articles" class="cta-link">Read Articles &rarr;</a>
            <a href="/resume.html" target="_blank" class="cta-link cv">Resume (CV) &rarr;</a>
          </div>

          <!-- Impact Metrics Ticker -->
          <div class="impact-ticker mt-5">
            <div class="impact-card">
              <span class="impact-number">-$5,000<span class="impact-unit">/mo</span></span>
              <span class="impact-label">RAG Token Cost Optimization (SwissRe)</span>
            </div>
            <div class="impact-card">
              <span class="impact-number">500+</span>
              <span class="impact-label">User Acquisitions via Vector Search (GradMeet)</span>
            </div>
            <div class="impact-card">
              <span class="impact-number">6,000+</span>
              <span class="impact-label">Gene Nodes in Graph Neural Network (IU)</span>
            </div>
          </div>
        </div>

        <div class="hero-right" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
          <div class="hero-photo-card">
            <img src="/portraits/Nitanshu_Joshi_4.jpg" alt="Nitanshu Joshi" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // AOS is already initialized in main.js
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 140px;
  padding-bottom: 80px;
}

.hero-split {
  display: grid;
  grid-template-columns: 60fr 40fr;
  gap: 48px;
  align-items: center;
}

.hero-left {
  min-width: 0;
}

.hero-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-photo-card {
  width: 100%;
  height: 520px;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--card-bg);
  transition: border-color var(--transition), box-shadow var(--transition);
}

.hero-photo-card:hover {
  border-color: var(--accent-color);
  box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.12);
}

[data-theme="dark"] .hero-photo-card:hover {
  box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.5);
}

.hero-photo-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: none;
  display: block;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background-color: var(--card-bg) !important;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-muted) !important;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #10b981;
  box-shadow: 0 0 8px #10b981;
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.9); }
}

.display-1 {
  font-size: clamp(2.75rem, 5.8vw, 5.5rem);
  line-height: 0.9;
  text-transform: uppercase;
  color: var(--text-color) !important;
}

.hero-subtitle {
  font-size: 1.4rem;
  font-weight: 400;
  max-width: 680px;
  line-height: 1.5;
  color: var(--text-muted) !important;
  margin-top: 24px;
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
}

.cta-link {
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  text-transform: uppercase;
  color: var(--text-color) !important;
  letter-spacing: 0.05em;
  padding: 8px 0;
  border-bottom: 2px solid var(--border-color);
  transition: border-color var(--transition), color var(--transition);
}

.cta-link:hover {
  border-bottom-color: var(--accent-color);
  color: var(--accent-color) !important;
}

.cta-link.primary {
  border-bottom-color: var(--text-color);
}

.cta-link.cv {
  font-family: var(--font-mono);
  color: var(--accent-color) !important;
  border-bottom-color: var(--accent-color);
}

/* Impact Metrics Ticker */
.impact-ticker {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
  gap: 16px;
  max-width: 100%;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}

.impact-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 18px;
  background-color: var(--card-bg) !important;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.impact-card:hover {
  border-color: var(--accent-color);
}

.impact-number {
  font-family: var(--font-mono);
  font-size: 1.65rem;
  font-weight: 700;
  color: var(--text-color) !important;
  letter-spacing: -0.02em;
}

.impact-unit {
  font-size: 1rem;
  font-weight: 500;
  color: var(--accent-color);
}

.impact-label {
  font-size: 0.85rem;
  color: var(--text-muted) !important;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .hero-section {
    padding-top: 110px;
    padding-bottom: 60px;
  }
  .hero-split {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .hero-right {
    order: -1;
  }
  .hero-photo-card {
    height: 320px;
  }
  .hero-subtitle {
    font-size: 1.15rem;
  }
  .impact-ticker {
    grid-template-columns: 1fr;
  }
}
</style>
