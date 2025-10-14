// Modern Portfolio JavaScript
document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initScrollEffects();
  initThemeToggle();
  initContactForm();
  initAnimations();
});

// Navigation functionality
function initNavigation() {
  const nav = document.querySelector(".modern-nav");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-item");

  // Mobile menu toggle
  if (mobileToggle) {
    mobileToggle.addEventListener("click", function () {
      mobileToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on links
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      mobileToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Active navigation link based on scroll position
  window.addEventListener("scroll", function () {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });
}

// Scroll effects and animations
function initScrollEffects() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in class
  document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
  });

  // Parallax effect for gradient orbs
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll(".gradient-orb");
    
    orbs.forEach((orb, index) => {
      const speed = 0.5 + index * 0.2;
      orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Theme toggle functionality
function initThemeToggle() {
  const themeToggle = document.querySelector(".theme-switcher");
  const themeIcon = document.querySelector(".theme-icon");

  if (!themeToggle) return;

  // Check for saved theme preference or default to 'dark'
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  // Toggle theme on button click
  themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset previous status
    if (formStatus) {
      formStatus.className = "form-status";
      formStatus.textContent = "";
    }

    // Validate form
    if (validateForm()) {
      // Simulate form submission
      if (formStatus) {
        formStatus.textContent = "Sending message...";
      }

      setTimeout(() => {
        if (formStatus) {
          formStatus.className = "form-status success";
          formStatus.textContent = "Thank you! Your message has been sent.";
        }
        contactForm.reset();
      }, 1500);
    }
  });

  function validateForm() {
    let isValid = true;

    // Validate name
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (name && !name.value.trim()) {
      if (nameError) nameError.textContent = "Name is required";
      isValid = false;
    } else {
      if (nameError) nameError.textContent = "";
    }

    // Validate email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !email.value.trim()) {
      if (emailError) emailError.textContent = "Email is required";
      isValid = false;
    } else if (email && !emailRegex.test(email.value)) {
      if (emailError) emailError.textContent = "Please enter a valid email";
      isValid = false;
    } else {
      if (emailError) emailError.textContent = "";
    }

    // Validate subject
    const subject = document.getElementById("subject");
    const subjectError = document.getElementById("subjectError");
    if (subject && !subject.value.trim()) {
      if (subjectError) subjectError.textContent = "Subject is required";
      isValid = false;
    } else {
      if (subjectError) subjectError.textContent = "";
    }

    // Validate message
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (message && !message.value.trim()) {
      if (messageError) messageError.textContent = "Message is required";
      isValid = false;
    } else {
      if (messageError) messageError.textContent = "";
    }

    return isValid;
  }
}

// Additional animations and effects
function initAnimations() {
  // Add staggered animation delay to skill tags
  const skillTags = document.querySelectorAll(".skill-tag");
  skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.05}s`;
  });

  // Add staggered animation to project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  // Typing effect for hero title (optional - can be removed if not desired)
  const heroTitle = document.querySelector(".hero-heading");
  if (heroTitle && window.innerWidth > 768) {
    const originalHTML = heroTitle.innerHTML;
    const textContent = heroTitle.textContent;
    heroTitle.textContent = "";
    heroTitle.style.opacity = "1";
    
    let charIndex = 0;
    let isTag = false;
    let tagBuffer = "";
    
    function type() {
      if (charIndex < originalHTML.length) {
        const char = originalHTML[charIndex];
        
        if (char === '<') {
          isTag = true;
          tagBuffer = '<';
        } else if (char === '>' && isTag) {
          isTag = false;
          tagBuffer += '>';
          heroTitle.innerHTML += tagBuffer;
          tagBuffer = "";
        } else if (isTag) {
          tagBuffer += char;
        } else {
          heroTitle.innerHTML += char;
        }
        
        charIndex++;
        setTimeout(type, isTag ? 0 : 50);
      }
    }
    
    setTimeout(type, 500);
  }

  // Animate stats on scroll
  const stats = document.querySelectorAll(".stat-value");
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = target.textContent;
        const numericValue = parseInt(finalValue);
        
        if (!isNaN(numericValue)) {
          let current = 0;
          const increment = numericValue / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              target.textContent = finalValue;
              clearInterval(timer);
            } else {
              target.textContent = Math.floor(current) + "+";
            }
          }, 30);
        }
        
        statsObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach((stat) => statsObserver.observe(stat));
}

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add cursor follower effect (optional premium feature)
function initCursorEffect() {
  if (window.innerWidth > 1024) {
    const cursor = document.createElement("div");
    cursor.className = "cursor-follower";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }
}