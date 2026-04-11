import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'

// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS
AOS.init({
  duration: 300,
  easing: 'ease-out-cubic',
  once: true,
  offset: 30
})

createApp(App).mount('#app')
