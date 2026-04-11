<template>
  <section id="tech-stack">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Tools & Technologies</h2>
      <div class="card-grid">
        <div 
          v-for="(stack, index) in stacks" 
          :key="index" 
          class="minimal-card"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div>
            <span class="card-tag">{{ stack.title }}</span>
            <div class="tech-list mt-4">
              <div v-for="icon in stack.icons" :key="icon.alt" class="tech-item">
                <span class="tech-name">{{ icon.alt }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stacks = [
  {
    title: 'Data Science & ML',
    icons: [
      { alt: 'TensorFlow' },
      { alt: 'Scikit-Learn' },
      { alt: 'PyTorch' },
      { alt: 'Python' },
      { alt: 'SageMaker' }
    ]
  },
  {
    title: 'LLM & GenAI',
    icons: [
      { alt: 'Hugging Face' },
      { alt: 'Langchain' },
      { alt: 'Chroma DB' },
      { alt: 'LangGraph' },
      { alt: 'Crew AI' }
    ]
  },
  {
    title: 'Data Engineering',
    icons: [
      { alt: 'PostgreSQL' },
      { alt: 'Snowflake' },
      { alt: 'Amazon Redshift' },
      { alt: 'Apache Spark' },
      { alt: 'Kafka' }
    ]
  },
  {
    title: 'Data Analysis & BI',
    icons: [
      { alt: 'Tableau' },
      { alt: 'Power BI' },
      { alt: 'Excel' }
    ]
  },
  {
    title: 'MLOps & CI/CD',
    icons: [
      { alt: 'Docker' },
      { alt: 'Git' },
      { alt: 'MLflow' },
      { alt: 'Airflow' }
    ]
  },
  {
    title: 'Cloud & Web',
    icons: [
      { alt: 'AWS' },
      { alt: 'Azure' },
      { alt: 'Streamlit' }
    ]
  }
]
</script>

<style scoped>
.tech-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.tech-name {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-color);
}

.minimal-card:hover .tech-name {
  color: var(--text-color);
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
