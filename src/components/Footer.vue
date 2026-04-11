<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid grid-layout">
        <div class="footer-left">
          <p class="muted">&copy; 2024 Nitanshu Joshi</p>
        </div>
        <div class="footer-right">
          <div class="footer-links">
            <a href="https://cloudyphotography.netlify.app/" target="_blank" class="muted">Photography Portfolio &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 60px 0;
  border-top: 1px solid var(--border-color);
}

.footer-left {
  grid-column: span 6;
}

.footer-right {
  grid-column: span 6;
  text-align: right;
}

.footer-links a {
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--text-color);
}

@media (max-width: 768px) {
  .footer-left, .footer-right {
    grid-column: span 12;
    text-align: left;
  }
  .footer-right {
    margin-top: 24px;
  }
}
</style>
