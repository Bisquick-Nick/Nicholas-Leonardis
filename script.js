// Simple form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Show success message (for demonstration)
    alert(`Thank you, ${name}! I'll get back to you at ${email}`);

    // Reset form
    this.reset();
});
window.addEventListener('DOMContentLoaded', () => {
  console.log("Site loaded!"); // Test if script runs on live site
});
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
  let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.getElementById('mainHeader');

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add('hidden');
  } else {
    // Scrolling up
    header.classList.remove('hidden');
  }

  lastScrollTop = currentScrollTop;
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  let lastScrollTop = 0;
  const header = document.getElementById("mainHeader");

  // Toggle mobile nav menu
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Scroll detection for header visibility
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.classList.add("hidden"); // scroll down
    } else {
      header.classList.remove("hidden"); // scroll up
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
