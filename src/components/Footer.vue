<template>
  <footer class="footer py-5 mt-5">
    <div class="container text-center">
      <p class="mb-2">© 2024 Nitanshu Joshi. All rights reserved.</p>
      <p class="mb-4">Data Scientist | ML Engineer | AI Engineer</p>
      <div class="footer-links">
        <a href="https://cloudyphotography.netlify.app/" target="_blank">Photography Portfolio</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--section-bg);
  color: var(--text-color);
  border-top: 1px solid var(--border-color);
}
.footer p {
  opacity: 0.8;
  font-weight: 500;
}
.footer-links a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}
.footer-links a:hover {
  opacity: 0.8;
  text-decoration: underline;
}
</style>
