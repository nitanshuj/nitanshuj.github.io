<template>
  <section id="tech-stack" class="py-5">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Tech Stack</h2>
      <div class="row">
        <div v-for="(stack, index) in stacks" :key="index" class="col-md-6 mb-4" data-aos="zoom-in" :data-aos-delay="index * 100">
          <div class="card skill-card h-100">
            <div class="card-body">
              <h4 class="card-title mb-4 text-center">{{ stack.title }}</h4>
              <div class="d-flex justify-content-center flex-wrap tech-icons">
                <div v-for="icon in stack.icons" :key="icon.alt" class="tech-icon-wrapper text-center mx-2 my-2">
                  <img :src="icon.src" :alt="icon.alt" class="tech-icon">
                  <p class="tech-icon-label">{{ icon.alt }}</p>
                </div>
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
      { src: '/icons/tensorflow-icon.png', alt: 'TensorFlow' },
      { src: '/icons/scikit-learn-icon.png', alt: 'Scikit-Learn' },
      { src: '/icons/pytorch-icon.png', alt: 'PyTorch' },
      { src: '/icons/python-icon.jpg', alt: 'Python' },
      { src: '/icons/aws-sagemaker-icon.png', alt: 'SageMaker' }
    ]
  },
  {
    title: 'LLM & GenAI',
    icons: [
      { src: '/icons/hugging-face-icon.png', alt: 'Hugging Face' },
      { src: '/icons/langchain-icon.png', alt: 'Langchain' },
      { src: '/icons/chroma-db-icon.png', alt: 'Chroma DB' },
      { src: '/icons/langgraph-icon.png', alt: 'LangGraph' },
      { src: '/icons/crew-ai-icon.png', alt: 'Crew AI' }
    ]
  },
  {
    title: 'Data Engineering',
    icons: [
      { src: '/icons/PostgreSQL-Icon.jpg', alt: 'PostgreSQL' },
      { src: '/icons/snowflake-icon.png', alt: 'Snowflake' },
      { src: '/icons/amazon-redshift.png', alt: 'Amazon Redshift' },
      { src: '/icons/apache-spark-icon.png', alt: 'Apache Spark' },
      { src: '/icons/kafka-icon.png', alt: 'Kafka' }
    ]
  },
  {
    title: 'Data Analysis & BA',
    icons: [
      { src: '/icons/tableau-icon.png', alt: 'Tableau' },
      { src: '/icons/powerbi-icon.png', alt: 'Power BI' },
      { src: '/icons/python-icon.jpg', alt: 'Python' },
      { src: '/icons/excel-icon.png', alt: 'Excel' }
    ]
  },
  {
    title: 'MLOps & CI/CD',
    icons: [
      { src: '/icons/docker-icon.png', alt: 'Docker' },
      { src: '/icons/git-logo.png', alt: 'Git' },
      { src: '/icons/mlflow-icon.png', alt: 'MLflow' },
      { src: '/icons/apache-airflow-icon.png', alt: 'Airflow' }
    ]
  },
  {
    title: 'Cloud',
    icons: [
      { src: '/icons/streamlit-icon.png', alt: 'Streamlit' },
      { src: '/icons/aws-icon.png', alt: 'AWS' },
      { src: '/icons/ms-azure-icon_1.png', alt: 'Azure' }
    ]
  }
]
</script>

<style scoped>
.tech-icon-wrapper {
  transition: var(--transition);
}
.tech-icon-wrapper:hover {
  transform: translateY(-5px);
}
.tech-icon {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 5px;
}
.tech-icon-label {
  font-size: 0.75rem;
  font-weight: 600;
  margin: 0;
  opacity: 0.7;
}
.skill-card {
  border-radius: 25px;
  padding: 20px;
}
</style>
