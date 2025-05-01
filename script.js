// Initialize AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS library
  AOS.init({
    duration: 800,
    easing: "ease",
    once: true,
    offset: 100,
  })

  // Theme Switcher
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]')

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark")
      document.body.classList.add("dark-mode")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.setAttribute("data-theme", "light")
      document.documentElement.setAttribute("data-theme", "light")
      document.body.classList.remove("dark-mode")
      localStorage.setItem("theme", "light")
    }
  }

  toggleSwitch.addEventListener("change", switchTheme)

  // Check for saved theme preference
  const currentTheme = localStorage.getItem("theme")
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme)
    if (currentTheme === "dark") {
      toggleSwitch.checked = true
      document.body.classList.add("dark-mode")
    }
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.padding = "10px 0"
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)"
    } else {
      navbar.style.padding = "15px 0"
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        })
      }
    })
  })

  // Back to top button
  const backToTopButton = document.getElementById("back-to-top")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("active")
    } else {
      backToTopButton.classList.remove("active")
    }
  })

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Project filtering for completed projects
  const filterButtons = document.querySelectorAll(".filter-btn[data-category]")
  const projectCards = document.querySelectorAll(".project-card")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      const category = this.getAttribute("data-category")

      if (category === "all") {
        projectCards.forEach((card) => {
          card.style.display = "block"
        })
      } else {
        projectCards.forEach((card) => {
          if (card.getAttribute("data-category").includes(category)) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      }
    })
  })

  // Active projects filtering
  const activeFilterButtons = document.querySelectorAll(".filter-btn[data-active-category]")
  const activeProjectItems = document.querySelectorAll(".active-project-item")

  activeFilterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      activeFilterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      const category = this.getAttribute("data-active-category")

      if (category === "all") {
        activeProjectItems.forEach((item) => {
          item.style.display = "block"
        })
      } else {
        activeProjectItems.forEach((item) => {
          if (item.getAttribute("data-active-category") === category) {
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        })
      }
    })
  })

  // Add hover effect to tech icons
  const techIcons = document.querySelectorAll(".tech-icon")

  techIcons.forEach((icon) => {
    icon.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.2)"
    })

    icon.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)"
    })
  })

  // Animate skill cards on hover
  const skillCards = document.querySelectorAll(".skill-card")

  skillCards.forEach((card) => {
    card.addEventListener("mouseover", function () {
      this.style.transform = "translateY(-10px)"
    })

    card.addEventListener("mouseout", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Animate project cards on hover
  const projectCardElements = document.querySelectorAll(".project-card .card")

  projectCardElements.forEach((card) => {
    card.addEventListener("mouseover", function () {
      this.style.transform = "translateY(-10px)"
    })

    card.addEventListener("mouseout", function () {
      this.style.transform = "translateY(0)"
    })
  })
})
