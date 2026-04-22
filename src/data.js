export const projects = [
  {
    id: 'ecoaction-ai',
    title: 'EcoAction AI',
    image: '/project_images/ecoaction-ai.jpg',
    github: 'https://github.com/nitanshuj/ecoaction_ai_v01.git',
    categories: ['ai-agents', 'genai-llm', 'business-analysis'],
    badges: ['AI Agent', 'Crew AI', 'Open AI', 'GPT 4', 'Python', 'Streamlit'],
    description: 'A hyper-personalized, AI-powered coaching platform that translates the abstract goal of "living sustainably" into a manageable, engaging, and highly effective personal journey.'
  },
  {
    id: 'arxiv-multi-agent',
    title: 'Arxiv Research Assistant Multi-agent',
    image: '/project_images/arxiv-multi-agent.png',
    github: 'https://github.com/nitanshuj/arxiv_research_assistant.git',
    categories: ['ai-agents', 'genai-llm'],
    badges: ['AI Agent', 'Crew AI', 'LM Studio', 'Local LLM', 'Python', 'Streamlit'],
    description: 'Designed a locally hosted LLM based AI-Agent for researching top research papers from Arxiv.'
  },
  {
    id: 'reddit-sentiment',
    title: 'Reddit Sentiment Analysis',
    image: '/project_images/reddit-sentiment-analysis.jpg',
    github: 'https://github.com/nitanshuj/Reddit-Data-Pipelining.git',
    categories: ['data-engineering', 'data-scientist-ml'],
    badges: ['Data Engineering', 'NLP', 'Classification', 'Data Streaming', 'Python', 'Hugging Face'],
    description: 'Designed a pipeline for streaming data from reddit, and then performed a sentiment analysis classification on it.'
  },
  {
    id: 'rag-pdf',
    title: 'RAG App for chat with PDF',
    image: '/project_images/rag-app-icon-1.png',
    github: 'https://github.com/nitanshuj/LLM-Based-Chat-with-pdf.git',
    categories: ['genai-llm'],
    badges: ['Ollama', 'Streamlit', 'LLama 3.1', 'Langchain', 'Python'],
    description: 'Designed a RAG application for chatting with PDF using Locally hosted LLM using Ollama.'
  },
  {
    id: 'hospital-rating',
    title: 'Hospital CMS Rating Improvement',
    image: '/project_images/evanston_hosp.JPG',
    github: 'https://github.com/nitanshuj/Healthcare-Suggestions-for-CMS-Rating-Improvement-for-Evanston-Hospital',
    categories: ['data-scientist-ml', 'data-analysis', 'business-analysis'],
    badges: ['Business Analysis', 'Regression', 'Data Analysis', 'Data Visualization', 'Root Cause Analysis'],
    description: 'Analyzed CMS Rating data to perform business analysis on the root causes of poor performance and CMS score for a hospital.'
  },
  {
    id: 'sales-forecasting',
    title: 'Sales Forecasting for Global Mart',
    image: '/project_images/time_series.jpg',
    github: 'https://github.com/nitanshuj/Sales-Forecasting-for-Global-Mart',
    categories: ['data-scientist-ml', 'data-analysis'],
    badges: ['Data Analysis', 'Time Series Forecasting', 'Data Visualization', 'Root Cause Analysis', 'Python'],
    description: 'Forecasted 6-months sales for a retail chain using smoothing and auto-regressive methods, by analyzing time series data.'
  },
  {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection',
    image: '/project_images/credit-card-fraud-detection.png',
    github: 'https://github.com/nitanshuj/Credit-Card-Fraud-End-to-End.git',
    categories: ['data-scientist-ml', 'data-analysis', 'business-analysis'],
    badges: ['Data Analysis', 'Azure', 'XGBoost', 'End-to-End ML', 'Root Cause Analysis', 'Python'],
    description: 'Designed and deployed an XGBoost ML Model on Azure, after performing Root cause analysis on the causes of possible Credit Card fraud.'
  },
  {
    id: 'telecom-churn',
    title: 'Telecom Churn Analysis',
    image: '/project_images/telecom-churn-case-study.png',
    github: 'https://github.com/nitanshuj/Churn-Analysis-for-a-Telecom-Company.git',
    categories: ['data-scientist-ml', 'data-analysis', 'business-analysis'],
    badges: ['Data Analysis', 'Logistic Regression', 'Churn Analysis', 'Root Cause Analysis', 'Python'],
    description: 'Designed a ML based analytical technique to identify and predict the causes of churn in the telecom sector.'
  }
]

export const articles = [
  {
    title: 'Talk Smarter to Claude: A Practical Guide to Prompting Better Within Limits',
    image: '/project_images/article_6_talk Smarter_to_Claude.png',
    link: '#',
    description: 'How a few simple habits can stretch your Claude sessions further than you thought possible.'
  },
  {
    title: '10 Interesting MLOps Interview Questions for ML Engineers',
    image: '/project_images/article_5.png',
    link: 'https://medium.com/@nitanshuj138/10-interesting-mlops-interview-questions-for-ml-engineers-eb2c1f9329ae',
    description: 'Essential Questions to Prepare for Your Next Role in MLOps & ML Engineering'
  },
  {
    title: 'Production ML Is Different: A Brutally Honest Guide to MLOps Pipelines',
    image: '/project_images/article_4.png',
    link: 'https://medium.com/@nitanshuj138/mlops-the-11-stage-pipeline-that-separates-data-scientists-from-ml-engineers-9410d27ef805',
    description: 'The 11-Stage Pipeline That Separates Data Scientists From ML Engineers'
  },
  {
    title: 'Why Your RAG Sucks (And How to Fix It)',
    image: '/project_images/article_3.png',
    link: 'https://medium.com/@nitanshuj138/why-your-rag-sucks-and-how-to-fix-it-849585ff5a5e',
    description: 'From Generic Chunking-based RAG to Category-Aware RAG: A Deep Dive into Production-Ready Document Processing'
  },
  {
    title: 'A Multi-Agent ArXiv Research Assistant',
    image: '/project_images/article_2_arxiv_AI_assistant_Agent.png',
    link: 'https://medium.com/@nitanshuj138/a-multi-agent-system-to-find-top-innovative-arxiv-papers-2a440709f832',
    description: 'A Multi Agent Framework that helps with researching the top AI Papers in ArXiv'
  },
  {
    title: 'My Experiments with Sleep',
    image: '/project_images/article_1_my_experiements_with_sleep.jpg',
    link: 'https://medium.com/@nitanshuj138/my-experiments-with-sleep-a45235c03c06',
    description: 'Time series analysis of sleep'
  }
]

export const experience = [
  {
    title: 'Analytics Engineer',
    company: 'SwissRe',
    location: 'Bangalore, India',
    period: 'November 2025 – Present',
    description: '',
    achievements: [
      'Developed and maintained 4 enterprise-scale AI & ML models on Palantir Foundry.',
      'Optimized AI RAG-based models to significantly reduce LLM token usage and improve query efficiency.'
    ],
    tags: ['Python', 'Palantir Foundry', 'Document Search', 'NLP', 'MS Azure']
  },
  {
    title: 'Data Scientist',
    company: 'GradMeet LLC',
    location: 'Remote, USA',
    period: 'October 2024 – May 2025',
    achievements: [
      'Launched a Vector Search driven recommendation engine on AWS EC2, driving 500+ new user acquisitions and boosting engagement by 20%',
      'Boosted satisfaction for 100+ active users by integrating NLP-driven sentiment analysis',
      'Built an internal RAG system to organize documents and enable fast, accurate retrieval',
      'Partnered with Marketing and Finance teams to validate growth strategies using A/B testing',
      'Productionized analytics with AWS/Docker/CI/CD, improving reliability'
    ],
    tags: ['Python', 'Postgres SQL', 'AWS EC2', 'Vector Search', 'NLP', 'RAG', 'Docker', 'CI/CD']
  },
  {
    title: 'Data Scientist',
    company: 'Indiana University Bloomington',
    location: 'Bloomington, IN, USA',
    period: 'September 2023 – August 2024',
    achievements: [
      'Enhanced spatial genomic data, increasing cluster quality by 18% (Silhouette)',
      'Engineered a cutting-edge Graph Neural Network that integrated 6,000 genes',
      'Streamlined validation workflows for 15,000+ RNA-seq samples',
      'Translated complex 2D gene patterns into actionable insights'
    ],
    tags: ['Python', 'Graph Neural Networks', 'PyTorch', 'Bioinformatics', 'Statistical Analysis']
  },
  {
    title: 'Associate Instructor',
    company: 'Indiana University Bloomington',
    location: 'Bloomington, IN, USA',
    period: 'January 2023 – May 2023',
    achievements: [
      'Mentored Master\'s and PhD level 30 students in machine learning workshops'
    ],
    tags: ['R Programming', 'Python', 'Statistical Analysis', 'Machine Learning', 'Teaching']
  },
  {
    title: 'Research Data Analyst',
    company: 'Biostatistics Consulting Center, IU',
    location: 'Bloomington, IN, USA',
    period: 'August 2022 – December 2022',
    achievements: [
      'Spearheaded analysis of 35,000+ COVID-19 PCR test records',
      'Built Power BI dashboards for real-time test tracking',
      'Ensured 99% diagnostic accuracy by rigorously validating laboratory processes'
    ],
    tags: ['Python', 'MS Excel', 'Power BI', 'Statistical Analysis', 'ANOVA', 'Clinical Data Analysis']
  }
]

export const education = [
  {
    degree: 'Master of Science in Data Science',
    institution: 'Indiana University',
    location: 'Bloomington, IN, USA',
    period: 'Aug 2021 - May 2023',
    coursework: ['Advanced Machine Learning', 'Deep Learning', 'Statistical Modeling', 'Big Data Analytics', 'Data Mining', 'Bayesian Methods', 'Time Series Analysis', 'Natural Language Processing']
  },
  {
    degree: 'Post Graduate Diploma in Data Science',
    institution: 'IIIT Bangalore',
    location: 'India',
    period: 'Aug 2020 - Aug 2021',
    coursework: ['Business Analytics', 'Predictive Modeling', 'Data Visualization', 'Applied Statistics', 'Market Research', 'Operations Research']
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Symbiosis International University',
    location: 'Pune, India',
    period: 'May 2019',
    coursework: ['Artificial Intelligence', 'Data Structures & Algorithms', 'Database Management', 'Software Engineering']
  }
]
