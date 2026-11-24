import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap & vendor styles first
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import our custom design system last so custom tokens override vendor defaults
import './assets/main.css'

// Initialize AOS
AOS.init({
  duration: 500,
  easing: 'ease-out-cubic',
  once: true,
  offset: 50
})

createApp(App).mount('#app')
